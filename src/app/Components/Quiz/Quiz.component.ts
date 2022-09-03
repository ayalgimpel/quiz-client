import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Answer from 'src/app/Data/Models/answer.module';
import Question from 'src/app/Data/Models/question.module';
import Quiz from 'src/app/Data/Models/quiz.module';
import AnswersService from 'src/app/Services/answers.service';
import QuestionsService from 'src/app/Services/questions.service';
import QuizService from 'src/app/Services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-Quiz',
  templateUrl: './Quiz.component.html',
  styleUrls: ['./Quiz.component.css']
})
export class QuizComponent implements OnInit {

  answers: Answer[] | undefined;
  currentIndex: number | undefined;
  currentQuestion: Question | undefined;
  quiz: Quiz = new Quiz("", "", "", "", 0)
  questionsCount: number | undefined;
  currentPage: number | undefined;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private quizService: QuizService,
    private questionsService: QuestionsService,
    private answersService: AnswersService
  ) {

  }

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const quizCode = params["quizeCode"]
      this.quizService.getQuizByQuizeCode(quizCode).subscribe(async quiz => {
        this.quiz = quiz
        this.quizService.getQuizQuestions(quiz.Id).subscribe((questions) => {



          this.quiz.Questions = questions;

          const firstIndex = 1;
          this.currentIndex = firstIndex;
          this.currentQuestion = this.quiz.Questions[firstIndex - 1];


          this.questionsService.getAnswers(this.currentQuestion?.Id).subscribe(ans => {
            this.answers = ans;
          })

          // pager params
          this.questionsCount = questions.length;
          this.currentPage = firstIndex;

        });
      });
    })
  }


  GoToFinishQuiz() {
    Swal.fire({
      title: "Are You Sure You Want To Finish This Quiz?",
      text: "After you click finish you can't go back..",
      icon: "warning",
      confirmButtonColor: "green",
      confirmButtonText: "Send",
      showCancelButton: true,
    }).then((result: any) => {
      if (result.value) {
        this.router.navigate(['ResultQuiz'])
      }
    })


  }

  onChangeQuestion(page: number) {
    this.currentQuestion = this.quiz.Questions[page - 1];
    this.currentPage = page;
    this.currentIndex = page;
    this.questionsService.getAnswers(this.currentQuestion?.Id).subscribe(ans => {
      this.answers = ans;
    })

  }

  onNext() {
    if (!this.currentPage)
      return

    if (this.currentPage == this.questionsCount)
      return

    this.currentPage++;
    this.currentQuestion = this.quiz.Questions[this.currentPage - 1];

    this.questionsService.getAnswers(this.currentQuestion?.Id).subscribe(ans => {
      this.answers = ans;
      debugger;
    })

  }
  onPrve() {
    if (!this.currentPage)
      return

    if (!this.questionsCount)
      return

    if (this.currentPage === 1)
      return

    this.currentPage--;
    this.currentQuestion = this.quiz.Questions[this.currentPage - 1];

    this.questionsService.getAnswers(this.currentQuestion?.Id).subscribe(ans => {
      this.answers = ans;
    })
  }

  onSelectedAnswer(data: any) {
    const payload = {
      answerId: data.answerId
    }
    //this.answersService.CreateStudentAnswer(this.quiz?.Id, this.student?.Id, answerId).subscribe(createdStudentAnswer => {
    //  console.log(createdStudentAnswer);
    //});

  }
}

