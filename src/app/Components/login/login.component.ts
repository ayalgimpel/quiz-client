import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
   iconImageSource:string = "../../pictures/Login2.jpeg"
  ngOnInit() {
  }
  GoToAdminOptions(){
    this.router.navigate(['AdminOptions'])
  }

}
