import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
class QuestionsService {
    constructor(private http: HttpClient) {
    }
    baseUrl: string = "http://localhost:4000";

    getAllQuestions(): Observable<any> {
        return this.http.get(this.baseUrl + "/api/questions");
    }
    getQuestionsById(id: string): Observable<any> {
        return this.http.get(this.baseUrl + `/api/questions/getById?Id=${id}`)
    }
    getAnswers(questionId: string):Observable<any> {
        return this.http.get(this.baseUrl + `/api/questions/${questionId}/answers`);
    }
    //DeleteQuizById(id:string):Observable<any>{
    //    return this.http.delete(this.baseUrl + `/api/questions/deleteQuiz?quizID=${id}`);
    // }






}
export default QuestionsService;