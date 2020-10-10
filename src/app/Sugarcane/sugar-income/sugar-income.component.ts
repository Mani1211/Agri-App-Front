import { MatSnackBar } from "@angular/material";
import { SugarcaneService } from "./../../sugarcane.service";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";

@Component({
  selector: "sugar-income",
  templateUrl: "./sugar-income.component.html",
  styleUrls: ["./sugar-income.component.css"],
})
export class SugarIncomeComponent {
  createForm: FormGroup;
  userId;
  constructor(
    private snackbar: MatSnackBar,
    private details: SugarcaneService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm = this.fb.group({
      date: ["", Validators.required],
      customerName: ["", Validators.required],
      customerPlace: ["", Validators.required],
      vehicleNumber: ["", Validators.required],
      ryotNumber: ["", Validators.required],
      plotNumber: ["", Validators.required],
      costPerTon: ["", Validators.required],
      totalTons: ["", Validators.required],
      amount: ["", Validators.required],
      advance: ["", Validators.required],
      balance: ["", Validators.required],
      amountGiven: ["", Validators.required],
    });
  }

  ngOnInit() {
    const userData = localStorage.getItem("User");

    const user = JSON.parse(userData);

    console.log(user.user.uid, "user");

    this.userId = user.user.uid;
    console.log(this.userId, "userId");
  }
  addSugarIncome(
    date,
    customerName,
    customerPlace,
    vehicleNumber,
    ryotNumber,
    plotNumber,
    costPerTon,
    totalTons,
    amount,
    advance,
    balance,
    amountGiven
  ) {
    this.details
      .addSugarIncome(
        date,
        customerName,
        customerPlace,
        vehicleNumber,
        ryotNumber,
        plotNumber,
        costPerTon,
        totalTons,
        amount,
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

        this.router.navigate(["/main/sugardetails"]);
      });
  }
}
