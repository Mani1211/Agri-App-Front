import { MatSnackBar } from "@angular/material";
import { Component, OnInit } from "@angular/core";
import { RicePlantService } from "./../../rice-plant.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "rice-expense-edit",
  templateUrl: "./rice-expense-edit.component.html",
  styleUrls: ["./rice-expense-edit.component.css"],
})
export class RiceExpenseEditComponent implements OnInit {
  updateForm: FormGroup;
  id;
  userId;
  expense;
  constructor(
    private snackbar: MatSnackBar,
    private details: RicePlantService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.createForm();
  }
  createForm() {
    this.updateForm = this.fb.group({
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
  ngOnInit() {
    const userData = localStorage.getItem("User");

    const user = JSON.parse(userData);

    console.log(user.user.uid, "user");

    this.userId = user.user.uid;
    console.log(this.userId, "userId");

    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.details.getExpenseDetailsById(this.id).subscribe((res) => {
        this.expense = res;
        this.updateForm.get("date").setValue(this.expense.date);
        this.updateForm.get("driverName").setValue(this.expense.driverName);
        this.updateForm.get("managerName").setValue(this.expense.managerName);
        this.updateForm.get("driverSalary").setValue(this.expense.driverSalary);
        this.updateForm
          .get("managerSalary")
          .setValue(this.expense.managerSalary);
        this.updateForm.get("petrol").setValue(this.expense.petrol);
        this.updateForm.get("diesel").setValue(this.expense.diesel);
        this.updateForm.get("spare").setValue(this.expense.spare);
        this.updateForm.get("service").setValue(this.expense.service);
        this.updateForm.get("foodCost").setValue(this.expense.foodCost);
        this.updateForm.get("totalAmount").setValue(this.expense.totalAmount);
      });
    });
  }

  updateRiceExpense(
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
    console.log(
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
    );
    this.details
      .updateRiceExpense(
        this.id,
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
        this.snackbar.open("Updated Successfully", "", {
          duration: 5000,
          verticalPosition: "top",
        });
        this.router.navigate(["/main/ricemanage"]);
      });
  }
}
