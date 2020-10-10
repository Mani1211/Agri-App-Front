import { MatSnackBar } from "@angular/material";
import { BalerService } from "./../../balerent.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-baler-rent-income",
  templateUrl: "./baler-rent-income.component.html",
  styleUrls: ["./baler-rent-income.component.css"],
})
export class BalerRentIncomeComponent implements OnInit {
  userId;
  createForm: FormGroup;
  constructor(
    private snackbar: MatSnackBar,
    private router: Router,
    private fb: FormBuilder,
    private baler: BalerService
  ) {
    this.createForm = this.fb.group({
      date: ["", Validators.required],
      customerName: ["", Validators.required],
      customerPlace: ["", Validators.required],
      billNumber: ["", Validators.required],
      numberOfBales: ["", Validators.required],
      rentOfBales: ["", Validators.required],
      totalAmount: ["", Validators.required],
      advance: ["", Validators.required],
      balance: ["", Validators.required],
      amountGiven: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    const userData = localStorage.getItem("User");

    const user = JSON.parse(userData);

    console.log(user.user.uid, "user");

    this.userId = user.user.uid;
    console.log(this.userId, "userId");
  }

  addRentIncome(
    date,
    customerName,
    customerPlace,
    billNumber,
    numberOfBales,
    rentOfBales,
    totalAmount,
    advance,
    balance,
    amountGiven
  ) {
    this.baler
      .addIncome(
        date,
        customerName,
        customerPlace,
        billNumber,
        numberOfBales,
        rentOfBales,
        totalAmount,
        advance,
        balance,
        amountGiven,
        this.userId
      )
      .subscribe((res) => {
        this.snackbar.open("Added Successfully", "", {
          duration: 5000,
          verticalPosition: "top",
        });
        this.router.navigate(["/main/balerdetails"]);
      });
  }
}
