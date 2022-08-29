import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-previewQuiz',
  templateUrl: './previewQuiz.component.html',
  styleUrls: ['./previewQuiz.component.css']
})
export class PreviewQuizComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  GoToStartQuiz(){
    this.router.navigate(['Quiz'])
  }

}
