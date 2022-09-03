import { Injectable } from "@angular/core";
import Quiz from "../Data/Models/quiz.module";
import Student from "../Data/Models/student.module";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
    providedIn: 'root'
})
class AppService {
    selectedInstitute:string="";
    selectedSubject:string="";

    constructor(
        private localStorageService: LocalStorageService
    ) {
    }
    getInstitute(){
        return this.selectedInstitute;
    }
    setInstitute(content:string){
        this.selectedInstitute = content;
    }
    getSubject(){
        return this.selectedSubject;
    }
    setSubject(content:string){
        this.selectedSubject = content;
    }

    
    getCurrentStudent() {
        const student = this.localStorageService.get('student');
        return student;
    }
    setCurrentStudent(student: Student) {
        this.localStorageService.set('student', student);
    }
   
}
export default AppService;