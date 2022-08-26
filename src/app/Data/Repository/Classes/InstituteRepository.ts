import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
class InstituteRepository{

    GetAllInstitutes(){
        return fetch("http://localhost:3030/Institue")
        .then(this.Succsses)
        .catch(this.Faild);
    }
    GetById(id:number){
        return fetch("http://localhost:3030/Institue/" + id)
            .then(this.Succsses)
            .catch(this.Faild);
    }
    
    
    Succsses(respons:Response){
        if (respons.status < 350) {
            return respons.json();
        }
        else {
            throw new Error(respons.statusText)
        }
    }
    Faild(error:string) {
        console.log(error)
    }
}
export default InstituteRepository;
    
