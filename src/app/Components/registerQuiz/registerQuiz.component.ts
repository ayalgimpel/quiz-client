import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-registerQuiz',
  templateUrl: './registerQuiz.component.html',
  styleUrls: ['./registerQuiz.component.css']
})
export class RegisterQuizComponent implements OnInit {

  quizeCode: string = ""
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }



  GoToPreviewQuiz(quizeCode: string) {
    this.router.navigate(['PreviewQuiz'], { queryParams: { quizeCode: quizeCode } })
  }

}
