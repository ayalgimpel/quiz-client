import { Component, OnInit } from '@angular/core';
import Quiz from 'src/app/Data/Models/quiz.modeule';
import QuizService from 'src/app/Services/quiz.service';

@Component({
  selector: 'app-Quiz',
  templateUrl: './Quiz.component.html',
  styleUrls: ['./Quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizes: Quiz[] = [];

  constructor(private service: QuizService) {
    
  }

  async ngOnInit() {
    this.quizes = await this.service.getAllQuizes();
  }


}
