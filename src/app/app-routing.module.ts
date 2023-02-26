import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionComponent } from './employee-happiness/admin-happiness/add-question/add-question.component';
import { HappinessLoginComponent } from './employee-happiness/happiness-login/happiness-login.component';

const routes: Routes = [
  {path: 'admin',component: AddQuestionComponent},
  {path: 'home',component: HappinessLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[AddQuestionComponent];