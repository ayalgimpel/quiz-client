import { ThisReceiver } from "@angular/compiler";
import { Guid } from "guid-typescript";

class Answer {
    Id: string;
    IsCorrect: Boolean = false;
    Checked: boolean = false;
    constructor(public Content: string, public QuestionId: Guid) {
        this.Id = Guid.create().toString();
    }
}
export default Answer;