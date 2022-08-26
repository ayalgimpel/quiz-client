import { FormGroupDirective } from "@angular/forms"
import { Guid } from "guid-typescript"
import Qustion from "./question.module"
import QuizSubjects from "./quiz.subjects.module";
import Student from "./student.module";

class Quiz {
    Id: string;
    Quiz_Code: Guid;
    Questions: Qustion[] = [];
    Approached_Students:Student[] = [];
    
    constructor
    (public Name:string,
     public Intrudaction:string,
     public Institue_Name:string,
     public Quiz_Subject:string,
     public PassingGrade:Number)
     {
        this.Id = Guid.create().toString();
        this.Quiz_Code = Guid.create();
    }

}
export default Quiz;
