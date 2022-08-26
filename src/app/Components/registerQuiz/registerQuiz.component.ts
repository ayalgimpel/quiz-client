import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerQuiz',
  templateUrl: './registerQuiz.component.html',
  styleUrls: ['./registerQuiz.component.css']
})
export class RegisterQuizComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
