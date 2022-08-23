import { Injectable } from "@angular/core";
import QuizRepository from "../Data/Repository/Classes/QuizRepository";

@Injectable({
    providedIn: 'root'
})
class QuizService {

    constructor(private quizRepository: QuizRepository) {
    }
    async getAllQuizes() {
        return this.quizRepository.Get();
    }

}
export default QuizService;