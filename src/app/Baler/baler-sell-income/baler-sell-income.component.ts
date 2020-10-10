import { MatSnackBar } from "@angular/material";
import { BalersellService } from "./../../balersell.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-baler-sell-income",
  templateUrl: "./baler-sell-income.component.html",
  styleUrls: ["./baler-sell-income.component.css"],
})
export class BalerSellIncomeComponent implements OnInit {
  userId;
  createForm: FormGroup;
  constructor(
    private snackbar: MatSnackBar,
    private router: Router,
    private fb: FormBuilder,
    private baler: BalersellService
  ) {
    this.createForm = this.fb.group({
      date: ["", Validators.required],
      buyerName: ["", Validators.required],
      buyerCellNumber: ["", Validators.required],
      vehicleNumber: ["", Validators.required],
      numberOfBales: ["", Validators.required],
      costPerBales: ["", Validators.required],
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

  addSellIncome(
    date,
    buyerName,
    buyerCellNumber,
    vehicleNumber,
    numberOfBales,
    costPerBales,
    totalAmount,
    advance,
    balance,
    amountGiven
  ) {
    this.baler
      .addIncome(
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
        this.userId
      )
      .subscribe(() => {
        this.snackbar.open("Added Successfully", "", {
          duration: 5000,
          verticalPosition: "top",
        });
        this.router.navigate(["/main/balerdetails"]);
      });
  }
}
