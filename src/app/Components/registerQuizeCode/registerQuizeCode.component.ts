import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registerQuizeCode',
  templateUrl: './registerQuizeCode.component.html',
  styleUrls: ['./registerQuizeCode.component.css']
})
export class RegisterQuizeCodeComponent implements OnInit {

  quizeCode: string = ""

  constructor(
    private router: Router,
     private route: ActivatedRoute) { }

  ngOnInit() {
  }


  GoToPreviewQuiz(quizeCode: string) {
    this.router.navigate(['PreviewQuiz'], { queryParams: { quizeCode: quizeCode } })
  }
}
