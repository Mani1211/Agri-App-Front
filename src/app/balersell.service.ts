import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BalersellService {

  constructor(private http:HttpClient) { }
  uri='https://glacial-beyond-05487.herokuapp.com';


  getIncomeDetails(){
    return this.http.get(`${this.uri}/balersellincomedetails`)
  }

  getIncomeDetailsById(id){
    return this.http.get(`${this.uri}/balersellincomedetails/${id}`)
  }

  addIncome(date,buyerName,buyerCellNumber,vehicleNumber,numberOfBales,costPerBales,totalAmount,advance,balance,amountGiven){
    const income ={
    date:date,
    buyerName:buyerName,
    buyerCellNumber:buyerCellNumber,
    vehicleNumber:vehicleNumber,
    numberOfBales:numberOfBales,
    costPerBales:costPerBales,
    totalAmount:totalAmount,
    advance:advance,
    balance:balance,
    amountGiven:amountGiven

    }
    return this.http.post(`${this.uri}/balersellincomedetails/add`,income)
  }

  updateIncome( id,date,buyerName,buyerCellNumber,vehicleNumber,numberOfBales,costPerBales,totalAmount,advance,balance,amountGiven){
    const income ={
      id:id,
    date:date,
    buyerName:buyerName,
    buyerCellNumber:buyerCellNumber,
    vehicleNumber:vehicleNumber,
    numberOfBales:numberOfBales,
    costPerBales:costPerBales,
    totalAmount:totalAmount,
    advance:advance,
    balance:balance,
    amountGiven:amountGiven

    }
    return this.http.post(`${this.uri}/balersellincomeupdate/${id}`,income)
  }

  deleteIncomeDetailsById(id){
    return this.http.get(`${this.uri}/balersellincomedetails/delete/${id}`)
  }

}
