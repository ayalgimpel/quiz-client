import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { AdminOptionComponent } from './Components/adminOption/adminOption.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MenageQuizesComponent } from './Components/menageQuizes/menageQuizes.component';
import { QuizComponent } from './Components/Quiz/Quiz.component';
import { RegisterQuizComponent } from './registerQuiz/registerQuiz/registerQuiz.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    HomeComponent,
    LoginComponent,
    AdminOptionComponent,
    MenageQuizesComponent,
    RegisterQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
