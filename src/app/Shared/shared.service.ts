import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  selectedInstituteName: string="";
  selectedSubjectName: string="";
  constructor() {
  }
  SetInstData(data:string){
    this.selectedInstituteName = data;
  }
  SetSubjData(data:string){
    this.selectedSubjectName = data;
  }
  GetInstData(){
    return this.selectedInstituteName;
  }
  GetSubjData(){
    return this.selectedInstituteName;
  }
}
