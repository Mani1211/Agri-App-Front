import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { SugarIncomeEditComponent } from './Sugarcane/sugar-income-edit/sugar-income-edit.component';

import { BalerService } from './balerent.service';
import { BalersellService } from './balersell.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule ,Routes} from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RiceIncomeComponent } from './Rice-Plant/rice-income/rice-income.component';
import { RiceExpenseComponent } from './Rice-Plant/rice-expense/rice-expense.component';
import { SugarIncomeComponent } from './Sugarcane/sugar-income/sugar-income.component';
import { SugarExpenseComponent } from './Sugarcane/sugar-expense/sugar-expense.component';
import { RiceDetailsComponent } from './Rice-Plant/rice-details/rice-details.component'
import { RicePlantService} from './rice-plant.service';
import { RiceManageComponent } from './Rice-Plant/rice-manage/rice-manage.component';
import { SugarManageComponent } from './Sugarcane/sugar-manage/sugar-manage.component';
import { SugarDetailsComponent } from './Sugarcane/sugar-details/sugar-details.component';
import { MaterialModule } from './material/material.module';
import { RiceIncomeEditComponent } from './Rice-Plant/rice-income-edit/rice-income-edit.component';
import { SugarcaneService } from './sugarcane.service';
import { RiceExpenseEditComponent } from './Rice-Plant/rice-expense-edit/rice-expense-edit.component';

import { BalerSellIncomeComponent } from './Baler/baler-sell-income/baler-sell-income.component';
import { BalerRentIncomeComponent } from './Baler/baler-rent-income/baler-rent-income.component';
import { BalerExpenseComponent } from './Baler/baler-expense/baler-expense.component';
import { BalerDetailsComponent } from './Baler/baler-details/baler-details.component';
import { BalerManageComponent } from './Baler/baler-manage/baler-manage.component';
import { BalerExpenseEditComponent } from './Baler/baler-expense-edit/baler-expense-edit.component';
import { BalerSellIncomeEditComponent } from './Baler/baler-sell-income-edit/baler-sell-income-edit.component';
import { BalerRentIncomeEditComponent } from './Baler/baler-rent-income-edit/baler-rent-income-edit.component';
import { SugarExpenseEditComponent } from './Sugarcane/sugar-expense-edit/sugar-expense-edit.component';




const routes:Routes = [
  {  path:'' , component:HomeComponent},
  {  path:'login', component:LoginComponent},
  { 
     path:'main',
     component:SidenavbarComponent,
     children:[
      {  path:'riceincome' , component:RiceIncomeComponent},
      {  path:'riceexpense' , component:RiceExpenseComponent},
      {  path:'ricemanage', component:RiceManageComponent},
      {  path:'ricedetails',component:RiceDetailsComponent},
      {  path:'sugarincome' , component:SugarIncomeComponent},
      {  path:'sugarexpense' , component:SugarExpenseComponent},
      {  path:'sugardetails',component:SugarDetailsComponent},
      {  path:'sugarmanage',component:SugarManageComponent},
      {  path:'editriceincome/:id',component:RiceIncomeEditComponent},
      {  path:'editriceexpense/:id',component:RiceExpenseEditComponent},
      {  path:'editsugarincome/:id',component:SugarIncomeEditComponent},
      {  path:'editsugarexpense/:id',component:SugarExpenseEditComponent},
      {  path:'balersellincome',component:BalerSellIncomeComponent},
      {  path:'balerrentincome',component:BalerRentIncomeComponent},
      {  path:'balerexpense',component:BalerExpenseComponent},
      {  path:'balerdetails',component:BalerDetailsComponent},
      {  path:'balermanage',component:BalerManageComponent},
      {  path:'editbalerrentincome/:id',component:BalerRentIncomeEditComponent},
      {  path:'editbalersellincome/:id',component:BalerSellIncomeEditComponent},
      {  path:'editbalerexpense/:id',component:BalerExpenseEditComponent}
     ]
} 
]

@NgModule({

  declarations: [
    AppComponent,
    SidenavbarComponent,
    HomeComponent,
    LoginComponent,
    RiceIncomeComponent,
    RiceExpenseComponent,
    SugarIncomeEditComponent,
    SugarExpenseEditComponent,
    SugarIncomeComponent,
    SugarExpenseComponent,
    RiceDetailsComponent,
    RiceManageComponent,
    SugarManageComponent,
    RiceIncomeEditComponent,
    SugarDetailsComponent,
    RiceExpenseEditComponent,
   
    BalerSellIncomeComponent,
    BalerRentIncomeComponent,
    BalerExpenseComponent,
    BalerDetailsComponent,
    BalerManageComponent,
    BalerExpenseEditComponent,
    BalerSellIncomeEditComponent,
    BalerRentIncomeEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    RouterModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    RicePlantService,
    SugarcaneService,
    BalersellService,
    BalerService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent],
  entryComponents:[]
})
export class AppModule { }
