import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SugarcaneService {

  uri='https://glacial-beyond-05487.herokuapp.com';

  constructor(private http:HttpClient) { }

  getIncomeDetails(){
    return this.http.get(`${this.uri}/sugarincomedetails`)
  }

  getIncomeDetailsById(id){
    return this.http.get(`${this.uri}/sugarincomedetails/${id}`)
  }

  addSugarIncome(date,customerName,customerPlace,ryotNumber,plotNumber,costPerTon,totalTons,amount,advance,balance,amountGiven){
    const income ={
    date:date,
    customerName:customerName,
    customerPlace:customerPlace,
    ryotNumber:ryotNumber,
    plotNumber:plotNumber,
    costPerTon:costPerTon,
    totalTons:totalTons,
    amount:amount,
    advance:advance,
    balance:balance,
    amountGiven:amountGiven

    }
    return this.http.post(`${this.uri}/sugarincomedetails/add`,income)
  }

  updateSugarIncome( id,date,customerName,customerPlace,ryotNumber,plotNumber,costPerTon,totalTons,amount,advance,balance,amountGiven){
    const income ={
      id:id,
    date:date,
    customerName:customerName,
    customerPlace:customerPlace,
    ryotNumber:ryotNumber,
    plotNumber:plotNumber,
    costPerTon:costPerTon,
    totalTons:totalTons,
    amount:amount,
    advance:advance,
    balance:balance,
    amountGiven:amountGiven

    }
    return this.http.post(`${this.uri}/sugarincomeupdate/${id}`,income)
  }

  deleteIncomeDetailsById(id){
    return this.http.get(`${this.uri}/sugarincomedetails/delete/${id}`)
  }



  getExpenseDetails(){
    return this.http.get(`${this.uri}/sugarexpensedetails`)
  }

  getExpenseDetailsById(id){
    return this.http.get(`${this.uri}/sugarexpensedetails/${id}`)
  } 

  addSugarExpense(driverName,managerName,driverSalary,managerSalary,
    date,petrol,diesel,spare,service,foodCost,totalAmount){
  const expense={
  driverName:driverName,
  managerName:managerName,
  driverSalary:driverSalary,
  managerSalary:managerSalary,
  date:date,
  petrol:petrol,
  diesel:diesel,
  spare:spare,
  service:service,
  foodCost:foodCost,
  totalAmount:totalAmount
}

return this.http.post(`${this.uri}/sugarexpensedetails/add`,expense)
  }


  updateSugarExpense(id,driverName,managerName,driverSalary,managerSalary,
    date,petrol,diesel,spare,service,foodCost,totalAmount){
  const expense={
    id:id,
  driverName:driverName,
  managerName:managerName,
  driverSalary:driverSalary,
  managerSalary:managerSalary,
  date:date,
  petrol:petrol,
  diesel:diesel,
  spare:spare,
  service:service,
  foodCost:foodCost,
  totalAmount:totalAmount
}

return this.http.post(`${this.uri}/sugarexpenseupdate/${id}`,expense)
  }

  deleteExpenseDetailsById(id){
    return this.http.get(`${this.uri}/sugarexpensedetails/delete/${id}`)
  }


   }


