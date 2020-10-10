import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { SugarcaneService } from "../../sugarcane.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {
  MatTableDataSource,
  MatSort,
  MatPaginator,
  MatSnackBar,
} from "@angular/material";

@Component({
  selector: "sugar-manage",
  templateUrl: "./sugar-manage.component.html",
  styleUrls: ["./sugar-manage.component.css"],
})
export class SugarManageComponent implements OnInit {
  incomeDetails: MatTableDataSource<any>;
  expenseDetails: MatTableDataSource<any>;
  id: String;
  updateForm: FormGroup;
  userId;

  searchKey1: string;
  searchKey2: string;
  @ViewChild(MatSort) sort1: MatSort;
  @ViewChild(MatPaginator) paginator1: MatPaginator;
  @ViewChild(MatSort) sort2: MatSort;
  @ViewChild(MatPaginator) paginator2: MatPaginator;
  constructor(
    private snackbar: MatSnackBar,
    private details: SugarcaneService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    //this.createIncomeForm();
  }

  displayedColumns1: string[] = [
    "date",
    "customerName",
    "customerPlace",
    "vehicleNumber",
    "ryotNumber",
    "plotNumber",
    "costPerTon",
    "totalTons",
    "amount",
    "advance",
    "balance",
    "amountGiven",
    "actions",
  ];

  displayedColumns2: string[] = [
    "date",
    "driverName",
    "managerName",
    "driverSalary",
    "managerSalary",
    "petrol",
    "diesel",
    "service",
    "spare",
    "foodCost",
    "totalAmount",
    "actions",
  ];

  ngOnInit() {
    const userData = localStorage.getItem("User");

    const user = JSON.parse(userData);

    console.log(user.user.uid, "user");

    this.userId = user.user.uid;
    console.log(this.userId, "userId");
    this.fetchIncomes();
    this.fetchExpense();
  }

  // createIncomeForm(){
  //   this.updateForm=this.fb.group({
  //     date:['',Validators.required],
  //   customerName:['',Validators.required],
  //   customerPlace:['',Validators.required],
  //   ryotNumber:['',Validators.required],
  //   plotNumber:['',Validators.required],
  //   costPerTon:['',Validators.required],
  //   totalTons:['',Validators.required],
  //   amount:['',Validators.required],
  //   advance:['',Validators.required],
  //   balance:['',Validators.required],
  //   amountGiven:['',Validators.required]
  //     })
  // }
  fetchIncomes() {
    this.details
      .getIncomeDetailsByUserId(this.userId)
      .subscribe((data: any) => {
        this.incomeDetails = new MatTableDataSource(data);
        this.incomeDetails.sort = this.sort1;
        this.incomeDetails.paginator = this.paginator1;
        console.log("Data requested....");
      });
  }

  fetchExpense() {
    this.details
      .getExpenseDetailsByUserId(this.userId)
      .subscribe((data: any) => {
        this.expenseDetails = new MatTableDataSource(data);
        this.expenseDetails.sort = this.sort1;
        this.expenseDetails.paginator = this.paginator1;
        console.log("Data requested....");
      });
  }

  deleteIncome(id) {
    this.details.deleteIncomeDetailsById(id).subscribe(() => {
      this.snackbar.open("Deleted Successfully", "", {
        duration: 5000,
        verticalPosition: "top",
      });
      this.fetchIncomes();
    });
  }

  deleteExpense(id) {
    this.details.deleteExpenseDetailsById(id).subscribe(() => {
      this.snackbar.open("Deleted Successfully", "", {
        duration: 5000,
        verticalPosition: "top",
      });
      this.fetchExpense();
    });
  }

  editIncome(id) {
    this.router.navigate([`/main/editsugarincome/${id}`]);
  }

  editExpense(id) {
    this.router.navigate([`/main/editsugarexpense/${id}`]);
  }
  onSearchClear() {
    this.searchKey1 = "";
    this.searchKey2 = "";
    this.applyFilter();
  }

  applyFilter() {
    this.incomeDetails.filter = this.searchKey1.trim().toLowerCase();
    this.expenseDetails.filter = this.searchKey2.trim().toLowerCase();
  }
}
