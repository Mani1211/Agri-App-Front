import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BalerService {

  constructor(private http:HttpClient) { }

  
  uri='https://glacial-beyond-05487.herokuapp.com';

  getIncomeDetails(){
    return this.http.get(`${this.uri}/balerrentincomedetails`)
  }

  getIncomeDetailsById(id){
    return this.http.get(`${this.uri}/balerrentincomedetails/${id}`)
  }

  addIncome(date,customerName,customerPlace,billNumber,numberOfBales,rentOfBales,totalAmount,advance,balance,amountGiven){
    const income ={
    date:date,
    customerName:customerName,
    customerPlace:customerPlace,
    billNumber:billNumber,
    numberOfBales:numberOfBales,
    rentOfBales:rentOfBales,
    totalAmount:totalAmount,
    advance:advance,
    balance:balance,
    amountGiven:amountGiven

    }
    return this.http.post(`${this.uri}/balerrentincomedetails/add`,income)
  }

  updateIncome( id,date,customerName,customerPlace,billNumber,numberOfBales,rentOfBales,totalAmount,advance,balance,amountGiven){
    const income ={
      id:id,
    date:date,
    customerName:customerName,
    customerPlace:customerPlace,
    billNumber:billNumber,
    numberOfBales:numberOfBales,
    rentOfBales:rentOfBales,
    totalAmount:totalAmount,
    advance:advance,
    balance:balance,
    amountGiven:amountGiven

    }
    return this.http.post(`${this.uri}/balerrentincomeupdate/${id}`,income)
  }

  deleteIncomeDetailsById(id){
    return this.http.get(`${this.uri}/balerrentincomedetails/delete/${id}`)
  }




  getExpenseDetails(){
    return this.http.get(`${this.uri}/balerexpensedetails`)
  }

  getExpenseDetailsById(id){
    return this.http.get(`${this.uri}/balerexpensedetails/${id}`)
  }

  addExpense(driverName,managerName,driverSalary,managerSalary,
    date,petrol,diesel,spare,service,foodCost,totalAmount,workerSalary,hayCost,juteCost){
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
  totalAmount:totalAmount,
  workerSalary:workerSalary,
  hayCost:hayCost,
  juteCost:juteCost
}

return this.http.post(`${this.uri}/balerexpensedetails/add`,expense)
  }


  updateExpense(id,driverName,managerName,driverSalary,managerSalary,
    date,petrol,diesel,spare,service,foodCost,totalAmount,workerSalary,hayCost,juteCost){
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
  totalAmount:totalAmount,
  workerSalary:workerSalary,
  hayCost:hayCost,
  juteCost:juteCost
}

return this.http.post(`${this.uri}/balerexpenseupdate/${id}`,expense)
  }

  deleteExpenseDetailsById(id){
    return this.http.get(`${this.uri}/balerexpensedetails/delete/${id}`)
  }

}
