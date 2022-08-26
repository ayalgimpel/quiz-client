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
  newArrayAfterFilter:Quiz[] = [];
  selectedInstitute: string = "";
  selectedSubject: string = "";

  constructor(private service: QuizService, private sharedService: SharedService) {

  }

  async ngOnInit() {
    this.selectedInstitute =this.sharedService.GetInstData();
    this.selectedSubject = this.sharedService.GetSubjData();
    console.log(this.selectedInstitute,this.selectedSubject);
    this.quizes = await this.service.getAllQuizes();
    this.newArrayAfterFilter = this.quizes.filter((quiz:Quiz)=>quiz.Institue_Name === this.selectedInstitute && quiz.Quiz_Subject === this.selectedSubject);
    console.log(this.newArrayAfterFilter);
  }

}
