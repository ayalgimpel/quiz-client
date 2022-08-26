import { Component, OnInit } from '@angular/core';
import Quiz from 'src/app/Data/Models/quiz.modeule';
import QuizService from 'src/app/Services/quiz.service';
import { SharedService } from 'src/app/Shared/shared.service';

@Component({
  selector: 'app-menageQuizes',
  templateUrl: './menageQuizes.component.html',
  styleUrls: ['./menageQuizes.component.css']
})
export class MenageQuizesComponent implements OnInit {

  quizes: Quiz[] = [];
  check:string="check!"

  constructor(private service: QuizService,private sharedService:SharedService) {
    
  }

  async ngOnInit() {
    this.quizes = await this.service.getAllQuizes();
  }

}
