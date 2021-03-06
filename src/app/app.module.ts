import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardSummaryComponent } from "./dashboard-summary/dashboard-summary.component";
import { DailyExpensesComponent } from './daily-expenses/daily-expenses.component';
import { AdditemsComponent } from './additems/additems.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AddItemsNavbarComponent } from './add-items-navbar/add-items-navbar.component';
import { ViewAddScreensComponent } from './view-add-screens/view-add-screens.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { AddIncomeComponent } from './add-income/add-income.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavigationComponent,
    DashboardSummaryComponent,
    DailyExpensesComponent,
    AdditemsComponent,
    CalendarComponent,
    AddItemsNavbarComponent,
    ViewAddScreensComponent,
    AddExpenseComponent,
    AddIncomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
