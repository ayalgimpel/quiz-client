import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


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
        return this.http.delete(this.baseUrl + `/api/quizes/deleteQuiz?quizID=${id}`);
    }
    getQuizById(id:string):Observable<any>{
        return  this.http.get(this.baseUrl+ `/api/quizes/getById?Id=${id}`)
    }
 

}
export default QuizService;