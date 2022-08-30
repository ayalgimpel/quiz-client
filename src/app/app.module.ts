import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AdminOptionComponent } from './Components/adminOption/adminOption.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MenageQuizesComponent } from './Components/menageQuizes/menageQuizes.component';
import { PreviewQuizComponent } from './Components/previewQuiz/previewQuiz.component';
import { QuizComponent } from './Components/Quiz/Quiz.component';
import { EditQuizComponent } from './Components/editQuiz/editQuiz.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    HomeComponent,
    LoginComponent,
    AdminOptionComponent,
    MenageQuizesComponent,
    EditQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
