import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeHappinessComponent } from './employee-happiness/employee-happiness.component';
import { HappinessHeaderComponent } from './employee-happiness/happiness-header/happiness-header.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeHappinessComponent,
    HappinessHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
