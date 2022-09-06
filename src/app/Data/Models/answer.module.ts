import { ThisReceiver } from "@angular/compiler";
import { Guid } from "guid-typescript";

class Answer{
    Id:string;
    IsCorrect:Boolean = false;
    constructor(public Content:string, public Qustion_Id:string) {
        this.Id = Guid.create().toString();
    }
}
export default Answer;