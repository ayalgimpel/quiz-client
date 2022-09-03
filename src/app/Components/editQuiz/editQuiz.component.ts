import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import AppService from 'src/app/core/app.service';
import Question from 'src/app/Data/Models/question.module';
import Quiz from 'src/app/Data/Models/quiz.module';
import QuestionsService from 'src/app/Services/questions.service';
import QuizService from 'src/app/Services/quiz.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-editQuiz',
  templateUrl: './editQuiz.component.html',
  styleUrls: ['./editQuiz.component.css']
})
export class EditQuizComponent implements OnInit {

  optionalQuestionList: Question[] = [];
  quizToEdit: Quiz = new Quiz("", "", "", "", 0);
  instituteName: string = "";
  SubjectName: string = "";

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private questionService: QuestionsService,
    private appService: AppService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const quizId = params["quizId"];
      if (!quizId) {
        debugger
        this.quizToEdit.Institue_Name = this.appService.getInstitute();
        this.quizToEdit.Quiz_Subject = this.appService.getSubject();
        this.GetAllQuestionForEdditing();
        return
      }
      this.quizService.getQuizById(quizId).subscribe
        (quiz => {
          this.quizToEdit = quiz;
          this.InitQuestions();
          this.GetAllQuestionForEdditing();
        })
    })

  }

  InitQuestions() {
    this.quizService.getQuizQuestions(this.quizToEdit.Id).subscribe((questions) => {
      debugger
      this.quizToEdit.Questions = questions
    })
  }
  GetAllQuestionForEdditing() {
    this.questionService.getAllQuestions().subscribe((questions) =>
      this.optionalQuestionList = questions
    )
    console.log(this.optionalQuestionList)
  }
  AddQuestionToQuiz(question: Question, quiz: Quiz) {
    console.log(question.Id)
    this.quizService.AddQuestionToQuiz(question.Id, quiz.Id).subscribe(
      {
        next: (addedQuestionID) => {
          if (addedQuestionID && addedQuestionID == question.Id) {
            question.Disabeld = true;
            this.quizToEdit.Questions.push(question);
          }
        },
        error: (err) => console.log(err)
      }
    )
  }
  RemoveQuestionFromQuiz(question: Question, quiz: Quiz) {
    this.quizService.removeQuestionFromQuiz(question.Id, quiz.Id).subscribe(
      {
        next: (removedQuestionID) => {
          if (removedQuestionID && removedQuestionID == question.Id) {
            question.Disabeld = false;
            const questionIndex = this.quizToEdit.Questions.indexOf(question);
            this.quizToEdit.Questions.splice(questionIndex, 1);
          }
        },
        error: (err) => console.log(err)
      }
    )
  }
  Edit() {
    Swal.fire({
      title: "Are You Sure You Want To Edit This Quiz?",
      text: "After Confirming, this Quiz Will Be Save with is New Data, Paramantely..",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      confirmButtonText: "Edit",
      cancelButtonText: "Cancle",
      cancelButtonColor: "grey",
    }).then((result: any) => {
      if (result.value) {

        const quiz: any = Object.assign({}, this.quizToEdit);
        quiz.Questions = quiz.Questions.map((item: any) => item.Id)
        this.quizService.EditQuiz(this.quizToEdit.Id, quiz).subscribe(res => {
          Swal.fire(
            "Updated!",
            `${this.quizToEdit.Name} was Updated sucssefully!`,
            "success"
          )
          this.router.navigate(['ManageQuizes'], { queryParams: { instituteID: quiz.Institue_Name, subjectID: quiz.Quiz_Subject} })
        })
      }

    })
  }



}
