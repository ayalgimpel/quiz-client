import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
class AnswersService {
    constructor(private http: HttpClient) {
    }
    baseUrl: string = "http://localhost:4000";

    CreateStudentAnswer(StudentQuizes_Id: string, Qustion_Id: string, Answer_Id: string): Observable<any> {
        return this.http.post(this.baseUrl + `/api/studentAnswers`, { StudentQuizes_Id, Qustion_Id, Answer_Id })
    }
}

export default AnswersService;