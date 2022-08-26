import { Injectable } from "@angular/core";
import InstituteRepository from "../Data/Repository/Classes/InstituteRepository";
import QuizSubjectsRepository from "../Data/Repository/Classes/QuizSubjectsRepository";

@Injectable({
    providedIn: 'root'
})
class AdminService {
    constructor(private instituteRepo:InstituteRepository, private quizSubjectsRepo:QuizSubjectsRepository ) {
    }
    async GetAllInstitutes() {
        return await this.instituteRepo.GetAllInstitutes();
    }
    async GetAllSubjects() {
        return await this.quizSubjectsRepo.GetAllSubjects();
    }
}
export default AdminService;