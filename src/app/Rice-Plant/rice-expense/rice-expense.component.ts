import { MatSnackBar } from "@angular/material";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RicePlantService } from "./../../rice-plant.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "rice-expense",
  templateUrl: "./rice-expense.component.html",
  styleUrls: ["./rice-expense.component.css"],
})
export class RiceExpenseComponent implements OnInit {
  createForm: FormGroup;
  userId;

  constructor(
    private snackbar: MatSnackBar,
    private details: RicePlantService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm = this.fb.group({
      date: ["", Validators.required],
      driverName: ["", Validators.required],
      managerName: ["", Validators.required],
      driverSalary: ["", Validators.required],
      managerSalary: ["", Validators.required],
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

  addRiceExpense(
    driverName,
    managerName,
    driverSalary,
    managerSalary,
    date,
    petrol,
    diesel,
    service,
    spare,
    foodCost,
    totalAmount
  ) {
    this.details
      .addRiceExpense(
        driverName,
        managerName,
        driverSalary,
        managerSalary,
        date,
        petrol,
        diesel,
        service,
        spare,
        foodCost,
        totalAmount,
        this.userId
      )
      .subscribe(() => {
        this.snackbar.open("Added Successfully", "", {
          duration: 5000,
          verticalPosition: "top",
        });
        this.router.navigate(["/main/ricedetails"]);
      });
  }
}
