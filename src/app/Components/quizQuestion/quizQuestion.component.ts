import { Component, Input, OnInit } from '@angular/core';
import Answer from 'src/app/Data/Models/answer.module';
import Question from 'src/app/Data/Models/question.module';
import QuestionsService from 'src/app/Services/questions.service';

@Component({
  selector: 'app-quizQuestion',
  templateUrl: './quizQuestion.component.html',
  styleUrls: ['./quizQuestion.component.css']
})
export class QuizQuestionComponent implements OnInit {

  @Input() question: Question | undefined;
  @Input() answer: Answer| undefined;
  answers :Answer[]=[];

  constructor(
    private questionsService: QuestionsService
  ) { }

  ngOnInit() {
    if (!this.question?.Id)
      return;

    this.questionsService.getAnswers(this.question?.Id).subscribe(ans => {
      this.answers = ans;
    })
    
  }

}
