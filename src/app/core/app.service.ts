import { Injectable } from "@angular/core";
import Quiz from "../Data/Models/quiz.module";
import Student from "../Data/Models/student.module";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
    providedIn: 'root'
})
class AppService {

    private currentStudent: Student | undefined;

    constructor(
        private localStorageService: LocalStorageService
    ) { }

    getCurrentStudent() {
        const student = this.localStorageService.get('student');
        return student;
    }
    setCurrentStudent(student: Student) {
        this.localStorageService.set('student', student);
    }


}

export default AppService;