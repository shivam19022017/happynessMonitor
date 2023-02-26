import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeHappinessComponent } from './employee-happiness/employee-happiness.component';
import { HappinessHeaderComponent } from './employee-happiness/happiness-header/happiness-header.component';
import { HappinessLoginComponent } from './employee-happiness/happiness-login/happiness-login.component';
import { HappinessQuestionComponent } from './employee-happiness/happiness-question/happiness-question.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeHappinessComponent,
    HappinessHeaderComponent,
    HappinessLoginComponent,
    HappinessQuestionComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
