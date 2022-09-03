import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import Student from "../Data/Models/student.module";
import StudentQuiz from "../Data/Models/StudentQuize.module";


@Injectable({
    providedIn: 'root'
})
class StudentQuizService {

    constructor(private http: HttpClient) {
    }
    baseUrl: string = "http://localhost:4000";

    create(studentQuiz: StudentQuiz) {
        return this.http.post(this.baseUrl + `/api/studentQuizes`, studentQuiz)
    }


}
export default StudentQuizService;