import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Answer from 'src/app/Data/Models/answer.module';
import Question from 'src/app/Data/Models/question.module';
import Quiz from 'src/app/Data/Models/quiz.modeule';
import QuestionsService from 'src/app/Services/questions.service';
import QuizService from 'src/app/Services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-Quiz',
  templateUrl: './Quiz.component.html',
  styleUrls: ['./Quiz.component.css']
})
export class QuizComponent implements OnInit {

  Currentanswer : Answer | undefined;
  currentQuestion: Question | undefined;
  quiz: Quiz = new Quiz("", "", "", "", 0)

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private quizService: QuizService,
    private questionsService: QuestionsService
  ) {

  }

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const quizCode = params["quizeCode"]
      this.quizService.getQuizByQuizeCode(quizCode).subscribe(async quiz => {
        this.quiz = quiz
        this.quizService.getQuizQuestions(quiz.Id).subscribe((questions) => {
          this.quiz.Questions = questions;
          this.currentQuestion = this.quiz.Questions[0];
          console.log(this.quiz.Questions);

          
        
          if (!this.currentQuestion?.Id)
          return;
    
        this.questionsService.getAnswers(this.currentQuestion?.Id).subscribe((answers) => {
      
          console.log(answers)
        
          this.currentQuestion?.Answers })
        
         
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
}

