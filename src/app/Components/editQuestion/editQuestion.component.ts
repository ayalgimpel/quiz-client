import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import AppService from 'src/app/core/app.service';
import Answer from 'src/app/Data/Models/answer.module';
import Question from 'src/app/Data/Models/question.module';
import AnswersService from 'src/app/Services/answers.service';
import QuestionsService from 'src/app/Services/questions.service';
import QuizService from 'src/app/Services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editQuestion',
  templateUrl: './editQuestion.component.html',
  styleUrls: ['./editQuestion.component.css']
})
export class EditQuestionComponent implements OnInit {

  questionId: string = "";
  questionToEdit: Question = new Question("");
  selectedType: string = "single";
  questionAnswerList: Answer[] = [];
  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private questionService: QuestionsService,
    private appService: AppService,
    private router: Router,
    private answerService: AnswersService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.questionId = params["questionId"];
      if (!this.questionId) {
        // this.quizToEdit = this.quizToCreate;
        // this.quizToEdit.Institue_Name = this.appService.getInstitute();
        // this.quizToEdit.Quiz_Subject = this.appService.getSubject();
        // this.InitQuestions();
        // this.GetAllQuestionForEdditing();
        return
      }
      this.questionService.getQuestionsById(this.questionId).subscribe
        (question => {
          this.questionToEdit = question;
          console.log(question)
          this.answerService.GetQuestionAnswers(this.questionToEdit.Id).subscribe(answers => {
            this.questionToEdit.Answers = answers
          })
          if (this.questionToEdit.SingleChoice) {
            this.selectedType = "single"
          }
          else {
            this.selectedType = "multiple"
          }
        })
    })
  }
  MarkAsCorrectAnswer(item: Answer) {
    // if(this.questionToEdit.MultipleChoice){
    //   this.answerService.ChangeAnswersState(this.questionToEdit.Id).subscribe()
    //   //לעשות פונקציה שהופכות את ה מצב של כל התשובות לאותה שאלה ל false

    // }
    if (this.questionToEdit.SingleChoice) {
      debugger;
      this.answerService.ChangeAnswersState(this.questionToEdit.Id).subscribe(item =>
        console.log(this.questionToEdit)
      )
      this.answerService.SetCorrectAnswer(item.Id).subscribe(item =>
        console.log(item)
      )
    }
  }
  AddAnswer() {
    const answer = new Answer("", this.questionToEdit.Id)
    answer.IsCorrect = false;
    this.answerService.AddNewAnswer(answer).subscribe(res => {
      this.questionToEdit.Answers.push(answer)
    })
  }

}
