import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Quiz from "../Data/Models/quiz.modeule";


@Injectable({
    providedIn: 'root'
})
class QuizService {

    // private headers = new HttpHeaders({"content-type":"application/json"})
    constructor(private http: HttpClient) {
    }
    baseUrl: string = "http://localhost:4000";

    getAllQuizes(): Observable<any> {
        return this.http.get(this.baseUrl + "/api/quizes");
    }
    getQuizQuestions(quizId: string): Observable<any> {
        return this.http.get(this.baseUrl + `/api/quizes/questionsByQuizId?quizId=${quizId}`);
    }

    DeleteQuizById(id: string): Observable<any> {   
        return this.http.delete(this.baseUrl + `/api/quizes/deleteQuiz?quizID=${id}`);
    }
    getQuizById(id: string): Observable<any> {
        return this.http.get(this.baseUrl + `/api/quizes/getById?Id=${id}`)
    }
    getQuizByQuizeCode(quizCode: string): Observable<any> {
        return this.http.get(this.baseUrl + `/api/quizes/getByQuizeCode?quizeCode=${quizCode}`)
    }
    AddQuestionToQuiz(questionId:string,quizId:string): Observable<any>{
        return this.http.get(this.baseUrl + `/api/quizes/AddQuestionToQuizList?questionId=${questionId}&quizId=${quizId}`)
    }
    removeQuestionFromQuiz(questionId:string,quizId:string): Observable<any>{
        return this.http.get(this.baseUrl + `/api/quizes/RemoveQuestionFromList?questionId=${questionId}&quizId=${quizId}`)
    }




}
export default QuizService;