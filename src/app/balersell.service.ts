import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class BalersellService {
  constructor(private http: HttpClient) {}
 uri = "https://agriapp-api.herokuapp.com";
  // uri = "http://localhost:3000";

  getIncomeDetails() {
    return this.http.get(`${this.uri}/balersellincomedetails`);
  }

  getIncomeDetailsByUserId(userId) {
    return this.http.get(`${this.uri}/balersellincomedetails/user/${userId}`);
  }

  getIncomeDetailsById(id) {
    return this.http.get(`${this.uri}/balersellincomedetails/${id}`);
  }

  addIncome(
    date,
    buyerName,
    buyerCellNumber,
    vehicleNumber,
    numberOfBales,

    costPerBales,
    totalAmount,
    advance,
    balance,
    amountGiven,
    userId
  ) {
    const income = {
      date: date,
      buyerName: buyerName,
      buyerCellNumber: buyerCellNumber,
      vehicleNumber: vehicleNumber,
      numberOfBales: numberOfBales,
      costPerBales: costPerBales,
      totalAmount: totalAmount,
      advance: advance,
      balance: balance,
      amountGiven: amountGiven,
      userId: userId,
    };

    console.log(income, "income");
    return this.http.post(`${this.uri}/balersellincomedetails/add`, income);
  }

  updateIncome(
    id,
    date,
    buyerName,
    buyerCellNumber,
    vehicleNumber,
    numberOfBales,
    costPerBales,
    totalAmount,
    advance,
    balance,
    amountGiven,
    userId
  ) {
    const income = {
      id: id,
      date: date,
      buyerName: buyerName,
      buyerCellNumber: buyerCellNumber,
      vehicleNumber: vehicleNumber,
      numberOfBales: numberOfBales,
      costPerBales: costPerBales,
      totalAmount: totalAmount,
      advance: advance,
      balance: balance,
      amountGiven: amountGiven,
      userId: userId,
    };
    console.log(income, "income");
    return this.http.post(`${this.uri}/balersellincomeupdate/${id}`, income);
  }

  deleteIncomeDetailsById(id) {
    return this.http.get(`${this.uri}/balersellincomedetails/delete/${id}`);
  }
}
