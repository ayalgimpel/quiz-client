import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOptionComponent } from './Components/adminOption/adminOption.component';
import { CreateQuizComponent } from './Components/createQuiz/createQuiz.component';
import { EditQuizComponent } from './Components/editQuiz/editQuiz.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ManageQuestionsComponent } from './Components/manageQuestions/manageQuestions.component';
import { MenageQuizesComponent } from './Components/menageQuizes/menageQuizes.component';
import { PreviewQuizComponent } from './Components/previewQuiz/previewQuiz.component';
import { QuizComponent } from './Components/Quiz/Quiz.component';
import { RegisterQuizComponent } from './Components/registerQuiz/registerQuiz.component';
import { ReportsComponent } from './Components/reports/reports.component';
import { ResultQuizComponent } from './Components/resultQuiz/resultQuiz.component';


const routes: Routes = [
  {path: 'Quiz',component: QuizComponent},
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  {path: 'Home',component: HomeComponent},
  {path: 'Login',component: LoginComponent},
  {path: 'AdminOptions',component: AdminOptionComponent},
  {path: 'ManageQuizes',component: MenageQuizesComponent},
  {path: 'ManageQuestions',component: ManageQuestionsComponent},
  {path: 'Reports',component: ReportsComponent},
  {path: 'EditQuiz',component: EditQuizComponent},
  {path: 'NewQuiz',component: CreateQuizComponent},
  {path: 'PreviewQuiz',component: PreviewQuizComponent},
  {path: 'ResultQuiz',component: ResultQuizComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
