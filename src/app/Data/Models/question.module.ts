import { Guid } from "guid-typescript";
import Answer from "./answer.module";

class Question{
    
    Id : string;
    SingleChoice:Boolean = true;
    MultipleChoice:Boolean = false;
    Content:string = "";
    SuplementaryContent :string = "";
    Answered:Answer[] = [];
    
    constructor(public Name:string, QuizId:Guid) {
      this.Id = Guid.create().toString();
    }

}
export default Question;