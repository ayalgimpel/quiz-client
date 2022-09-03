import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Question from 'src/app/Data/Models/question.module';
import Quiz from 'src/app/Data/Models/quiz.modeule';
import QuestionsService from 'src/app/Services/questions.service';
import QuizService from 'src/app/Services/quiz.service';

@Component({
  selector: 'app-editQuiz',
  templateUrl: './editQuiz.component.html',
  styleUrls: ['./editQuiz.component.css']
})
export class EditQuizComponent implements OnInit {

  optionalQuestionList: Question[] = [];
  quizToEdit: Quiz = new Quiz("", "", "", "", 0);
  constructor(private route: ActivatedRoute, private quizService: QuizService, private questionService: QuestionsService) { }
  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.quizService.getQuizById(params["quizId"]).subscribe
      (quiz => {
        this.quizToEdit = quiz;
        this.InitQuestions();
        this.GetAllQuestionForEdditing();
        })
    })

  }
  InitQuestions() {
    this.quizService.getQuizQuestions(this.quizToEdit.Id).subscribe((questions) =>{
      debugger
      this.quizToEdit.Questions = questions})
  }
  GetAllQuestionForEdditing() {
    this.questionService.getAllQuestions().subscribe((questions) =>
    this.optionalQuestionList = questions
    )
    console.log(this.optionalQuestionList)
  }
  AddQuestionToQuiz(question: Question, quiz:Quiz){
    console.log(question.Id)
   this.quizService.AddQuestionToQuiz(question.Id,quiz.Id).subscribe(
    {
      next: (addedQuestionID)=> {
        if(addedQuestionID && addedQuestionID == question.Id){
          question.Disabeld = true;
          this.quizToEdit.Questions.push(question);
        }
      },
      error: (err)=> console.log(err)
    }
   )
  }
  RemoveQuestionFromQuiz(question: Question, quiz:Quiz){
    this.quizService.removeQuestionFromQuiz(question.Id,quiz.Id).subscribe(
      {
        next: (removedQuestionID)=> {
          if(removedQuestionID && removedQuestionID == question.Id){
            question.Disabeld = false;
            const questionIndex = this.quizToEdit.Questions.indexOf(question);
            this.quizToEdit.Questions.splice(questionIndex,1);
          }
        },
        error: (err)=> console.log(err)
      }
    )
  }
  


}
