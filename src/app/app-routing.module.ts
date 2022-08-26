import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOptionComponent } from './Components/adminOption/adminOption.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ManageQuestionsComponent } from './Components/manageQuestions/manageQuestions.component';
import { MenageQuizesComponent } from './Components/menageQuizes/menageQuizes.component';
import { QuizComponent } from './Components/Quiz/Quiz.component';
import { ReportsComponent } from './Components/reports/reports.component';
import { RegisterQuizComponent } from './registerQuiz/registerQuiz/registerQuiz.component';

const routes: Routes = [
  {path: 'quiz',component: QuizComponent},
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  {path: 'Home',component: HomeComponent},
  {path: 'Login',component: LoginComponent},
  {path: 'AdminOptions',component: AdminOptionComponent},
  {path: 'ManageQuizes',component: MenageQuizesComponent},
  {path: 'ManageQuestions',component: ManageQuestionsComponent},
  {path: 'Reports',component: ReportsComponent},
  {path: 'RegisterQuiz',component: RegisterQuizComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
