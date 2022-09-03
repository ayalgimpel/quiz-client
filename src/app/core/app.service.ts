import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
class AppService {
    selectedInstitute:string="";
    selectedSubject:string="";

    constructor() {
    }
    getInstitute(){
        return this.selectedInstitute;
    }
    setInstitute(content:string){
        this.selectedInstitute = content;
    }
    getSubject(){
        return this.selectedSubject;
    }
    setSubject(content:string){
        this.selectedSubject = content;
    }
   
}
export default AppService;