import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Quiz from 'src/app/Data/Models/quiz.modeule';
import QuizService from 'src/app/Services/quiz.service';

@Component({
  selector: 'app-editQuiz',
  templateUrl: './editQuiz.component.html',
  styleUrls: ['./editQuiz.component.css']
})
export class EditQuizComponent implements OnInit {

  //quizToEdit:Quiz;
  constructor(private route:ActivatedRoute, private quizService:QuizService) { }

  ngOnInit() {
    // this.route.params.subscribe(params=>{
    //   this.quizService.getQuizById(params["quizId"]).subscribe(quiz =>
    //     this.quizToEdit = quiz)

    }//)
 // }

}
