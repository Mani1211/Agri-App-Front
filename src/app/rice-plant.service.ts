import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import _ from "lodash";
@Injectable({
  providedIn: "root",
})
export class RicePlantService {
   uri = "https://agriapp-api.herokuapp.com";
  // uri = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getIncomeDetails() {
    return this.http.get(`${this.uri}/riceincomedetails`);
  }
  getIncomeDetailsByUserId(userId) {
    return this.http.get(`${this.uri}/riceincomedetails/user/${userId}`);
  }
  getIncomeDetailsById(id) {
    return this.http.get(`${this.uri}/riceincomedetails/${id}`);
  }

  addRiceIncome(
    date,
    customerName,
    customerPlace,
    billNumber,
    numberOfAcre,
    costPerAcre,
    totalAmount,
    advance,
    balance,
    amountGiven,
    userId
  ) {
    const income = {
      date: date,
      customerName: customerName,
      customerPlace: customerPlace,
      billNumber: billNumber,
      numberOfAcre: numberOfAcre,
      costPerAcre: costPerAcre,
      totalAmount: totalAmount,
      advance: advance,
      balance: balance,
      amountGiven: amountGiven,
      userId: userId,
    };
    return this.http.post(`${this.uri}/riceincomedetails/add`, income);
  }

  updateRiceIncome(
    id,
    date,
    customerName,
    customerPlace,
    billNumber,
    numberOfAcre,
    costPerAcre,
    totalAmount,
    advance,
    balance,
    amountGiven,
    userId
  ) {
    const income = {
      id: id,
      date: date,
      customerName: customerName,
      customerPlace: customerPlace,
      billNumber: billNumber,
      numberOfAcre: numberOfAcre,
      costPerAcre: costPerAcre,
      totalAmount: totalAmount,
      advance: advance,
      balance: balance,
      amountGiven: amountGiven,
      userId: userId,
    };
    return this.http.post(`${this.uri}/riceincomeupdate/${id}`, income);
  }

  deleteIncomeDetailsById(id) {
    return this.http.get(`${this.uri}/riceincomedetails/delete/${id}`);
  }

  getExpenseDetails() {
    return this.http.get(`${this.uri}/riceexpensedetails`);
  }
  getExpenseDetailsByUserId(userId) {
    return this.http.get(`${this.uri}/riceexpensedetails/user/${userId}`);
  }
  getExpenseDetailsById(id) {
    return this.http.get(`${this.uri}/riceexpensedetails/${id}`);
  }

  addRiceExpense(
    driverName,
    managerName,
    driverSalary,
    managerSalary,
    date,
    petrol,
    diesel,
    spare,
    service,
    foodCost,
    totalAmount,
    userId
  ) {
    const expense = {
      driverName: driverName,
      managerName: managerName,
      driverSalary: driverSalary,
      managerSalary: managerSalary,
      date: date,
      petrol: petrol,
      diesel: diesel,
      spare: spare,
      service: service,
      foodCost: foodCost,
      totalAmount: totalAmount,
      userId: userId,
    };

    return this.http.post(`${this.uri}/riceexpensedetails/add`, expense);
  }

  updateRiceExpense(
    id,
    driverName,
    managerName,
    driverSalary,
    managerSalary,
    date,
    petrol,
    diesel,
    spare,
    service,
    foodCost,
    totalAmount,
    userId
  ) {
    const expense = {
      id: id,
      driverName: driverName,
      managerName: managerName,
      driverSalary: driverSalary,
      managerSalary: managerSalary,
      date: date,
      petrol: petrol,
      diesel: diesel,
      spare: spare,
      service: service,
      foodCost: foodCost,
      totalAmount: totalAmount,
      userId: userId,
    };

    return this.http.post(`${this.uri}/riceexpenseupdate/${id}`, expense);
  }

  deleteExpenseDetailsById(id) {
    return this.http.get(`${this.uri}/riceexpensedetails/delete/${id}`);
  }
}
