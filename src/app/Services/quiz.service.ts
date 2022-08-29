import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Quiz from "../Data/Models/quiz.modeule";

@Injectable({
    providedIn: 'root'
})
class QuizService {
    constructor( private http:HttpClient) {
    }
    baseUrl: string = "http://localhost:4000";

    getAllQuizes():Observable<any>{
        return this.http.get(this.baseUrl+ "/api/quizes");
    }
    DeleteQuizById(id:string):Observable<any>{
        debugger
        return this.http.delete(this.baseUrl + `/api/quizes/deleteQuiz?quizID=${id}`);
    }
 

}
export default QuizService;