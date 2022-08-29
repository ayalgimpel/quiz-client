import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Institue from 'src/app/Data/Models/institute.module';
import QuizSubjects from 'src/app/Data/Models/quiz.subjects.module';
import AdminService from 'src/app/Services/admin.service';

@Component({
  selector: 'app-adminOption',
  templateUrl: './adminOption.component.html',
  styleUrls: ['./adminOption.component.css']
})

export class AdminOptionComponent implements OnInit {
institutesOptions:Institue[]=[];
quizSubjects:QuizSubjects[]=[];
selectedInstitute:string = "";
selectedSubject:string = "";
  constructor(private adminService:AdminService,private router:Router) { }

   ngOnInit() {
    this.adminService.GetAllInstitutes().subscribe(data =>{this.institutesOptions = data});
    this.adminService.GetAllSubjects().subscribe(data=>{this.quizSubjects = data})
    
  }
  GoToManageQuizesPage(){
    this.router.navigate(['ManageQuizes'], {queryParams: {instituteID:this.selectedInstitute, subjectID:this.selectedSubject }})
  }
  GoToReportsPage(){
    this.router.navigate(['Reports'])
  }
  GoToManageQuestionPage(){
    this.router.navigate(['ManageQuestions'])
  }
  OnSelectInstitute(event:any){
    this.selectedInstitute = event.target.value;
  }
  OnSelectSubjects(event:any){
    this.selectedSubject = event.target.value;
  }

}
