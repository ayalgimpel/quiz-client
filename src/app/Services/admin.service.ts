import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
class AdminService {
    constructor() {
    }
    async GetAllInstitutes() {
       // return await this.instituteRepo.GetAllInstitutes();
    }
    async GetAllSubjects() {
        //return await this.quizSubjectsRepo.GetAllSubjects();
    }
}
export default AdminService;