import { MatSnackBar } from "@angular/material";
import { Component, OnInit } from "@angular/core";
import { BalerService } from "./../../balerent.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-baler-rent-income-edit",
  templateUrl: "./baler-rent-income-edit.component.html",
  styleUrls: ["./baler-rent-income-edit.component.css"],
})
export class BalerRentIncomeEditComponent implements OnInit {
  userId;
  updateForm: FormGroup;
  id;
  income;
  constructor(
    private snackbar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private baler: BalerService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    const userData = localStorage.getItem("User");

    const user = JSON.parse(userData);

    console.log(user.user.uid, "user");

    this.userId = user.user.uid;
    console.log(this.userId, "userId");

    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.baler.getIncomeDetailsById(this.id).subscribe((res) => {
        this.income = res;
        this.updateForm.get("date").setValue(this.income.date);
        this.updateForm.get("customerName").setValue(this.income.customerName);
        this.updateForm
          .get("customerPlace")
          .setValue(this.income.customerPlace);
        this.updateForm.get("billNumber").setValue(this.income.billNumber);
        this.updateForm
          .get("numberOfBales")
          .setValue(this.income.numberOfBales);
        this.updateForm.get("rentOfBales").setValue(this.income.rentOfBales);
        this.updateForm.get("totalAmount").setValue(this.income.totalAmount);
        this.updateForm.get("advance").setValue(this.income.advance);
        this.updateForm.get("balance").setValue(this.income.balance);
        this.updateForm.get("amountGiven").setValue(this.income.amountGiven);
      });
    });
  }

  createForm() {
    this.updateForm = this.fb.group({
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

  updateIncome(
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
      .updateIncome(
        this.id,
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
        this.snackbar.open("Updated Successfully", "", {
          duration: 5000,
          verticalPosition: "top",
        });
        this.router.navigate(["/main/balerdetails"]);
      });
  }
}
