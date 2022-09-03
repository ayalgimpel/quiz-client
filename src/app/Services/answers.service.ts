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

    CreateStudentAnswer(Quiz_Id: string, Student_Id: string, Answer_Id: string): Observable<any> {
        return this.http.post(this.baseUrl + `/api/studentAnswers`, { Quiz_Id, Student_Id, Answer_Id })
    }
}

export default AnswersService;