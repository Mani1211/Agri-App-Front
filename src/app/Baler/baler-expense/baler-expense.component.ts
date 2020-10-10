import { MatSnackBar } from "@angular/material";
import { BalerService } from "./../../balerent.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-baler-expense",
  templateUrl: "./baler-expense.component.html",
  styleUrls: ["./baler-expense.component.css"],
})
export class BalerExpenseComponent implements OnInit {
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
      driverName: ["", Validators.required],
      managerName: ["", Validators.required],
      driverSalary: ["", Validators.required],
      managerSalary: ["", Validators.required],
      workerSalary: ["", Validators.required],
      hayCost: ["", Validators.required],
      juteCost: ["", Validators.required],
      petrol: ["", Validators.required],
      diesel: ["", Validators.required],
      spare: ["", Validators.required],
      service: ["", Validators.required],
      foodCost: ["", Validators.required],
      totalAmount: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    const userData = localStorage.getItem("User");

    const user = JSON.parse(userData);

    console.log(user.user.uid, "user");

    this.userId = user.user.uid;
    console.log(this.userId, "userId");
  }

  addExpense(
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
    workerSalary,
    hayCost,
    juteCost
  ) {
    this.baler
      .addExpense(
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
        workerSalary,
        hayCost,
        juteCost,
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
