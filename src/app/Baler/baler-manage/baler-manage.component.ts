import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { BalerService } from "./../../balerent.service";
import { BalersellService } from "src/app/balersell.service";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-baler-manage",
  templateUrl: "./baler-manage.component.html",
  styleUrls: ["./baler-manage.component.css"],
})
export class BalerManageComponent implements OnInit {
  userId;
  rentIncomeDetails1: MatTableDataSource<any>;
  sellIncomeDetails1: MatTableDataSource<any>;
  expenseDetails1: MatTableDataSource<any>;
  searchKey1: string;
  searchKey2: string;
  searchKey3: String;
  @ViewChild(MatSort) sort1: MatSort;
  @ViewChild(MatPaginator) paginator1: MatPaginator;
  @ViewChild(MatSort) sort2: MatSort;
  @ViewChild(MatPaginator) paginator2: MatPaginator;
  @ViewChild(MatSort) sort3: MatSort;
  @ViewChild(MatPaginator) paginator3: MatPaginator;

  constructor(
    private snackbar: MatSnackBar,
    private router: Router,
    private balerRent: BalerService,
    private balerSell: BalersellService
  ) {}

  displayedColumns1: string[] = [
    "date",
    "customerName",
    "customerPlace",
    "billNumber",
    "numberOfBales",
    "rentOfBales",
    "totalAmount",
    "advance",
    "balance",
    "amountGiven",
    "actions",
  ];

  displayedColumns2: string[] = [
    "date",
    "buyerName",
    "buyerCellNumber",
    "vehicleNumber",
    "numberOfBales",
    "costPerBales",
    "totalAmount",
    "advance",
    "balance",
    "amountGiven",
    "actions",
  ];

  displayedColumns3: string[] = [
    "date",
    "driverName",
    "managerName",
    "driverSalary",
    "managerSalary",
    "workerSalary",
    "petrol",
    "diesel",
    "service",
    "spare",
    "juteCost",
    "hayCost",
    "foodCost",
    "totalAmount",
    "actions",
  ];

  ngOnInit(): void {
    const userData = localStorage.getItem("User");

    const user = JSON.parse(userData);

    console.log(user.user.uid, "user");

    this.userId = user.user.uid;
    console.log(this.userId, "userId");
    this.fetchRentIncomes();
    this.fetchSellIncomes();
    this.fetchExpense();
  }

  onSearchClear() {
    this.searchKey1 = " ";
    this.searchKey2 = " ";
    this.searchKey3 = " ";
    this.applyFilter();
  }

  applyFilter() {
    this.rentIncomeDetails1.filter = this.searchKey1.trim().toLowerCase();
    this.sellIncomeDetails1.filter = this.searchKey1.trim().toLowerCase();
    this.expenseDetails1.filter = this.searchKey2.trim().toLowerCase();
  }

  fetchRentIncomes() {
    this.balerRent
      .getIncomeDetailsByUserId(this.userId)
      .subscribe((data: any) => {
        this.rentIncomeDetails1 = new MatTableDataSource(data);
        // this.rentIncomeDetails=data;
        console.log("income", this.rentIncomeDetails1);
        this.rentIncomeDetails1.sort = this.sort1;
        this.rentIncomeDetails1.paginator = this.paginator1;
        console.log("Data requested....", this.rentIncomeDetails1);
      });
  }

  fetchSellIncomes() {
    this.balerSell
      .getIncomeDetailsByUserId(this.userId)
      .subscribe((data: any) => {
        this.sellIncomeDetails1 = new MatTableDataSource(data);
        this.sellIncomeDetails1.sort = this.sort2;
        this.sellIncomeDetails1.paginator = this.paginator2;
        console.log("sellincome", this.sellIncomeDetails1);
      });
  }
  fetchExpense() {
    this.balerRent
      .getExpenseDetailsByUserId(this.userId)
      .subscribe((data: any) => {
        this.expenseDetails1 = new MatTableDataSource(data);
        this.expenseDetails1.sort = this.sort3;
        this.expenseDetails1.paginator = this.paginator3;
        console.log("Data requested....", this.expenseDetails1);
      });
  }

  deleteRentIncome(id) {
    this.balerRent.deleteIncomeDetailsById(id).subscribe(() => {
      this.snackbar.open("Deleted Successfully", "", {
        duration: 5000,
        verticalPosition: "top",
      });
      this.fetchRentIncomes();
    });
  }

  deleteSellIncome(id) {
    this.balerSell.deleteIncomeDetailsById(id).subscribe(() => {
      this.snackbar.open("Deleted Successfully", "", {
        duration: 5000,
        verticalPosition: "top",
      });
      this.fetchSellIncomes();
    });
  }

  deleteExpense(id) {
    this.balerRent.deleteExpenseDetailsById(id).subscribe(() => {
      this.snackbar.open("Deleted Successfully", "", {
        duration: 5000,
        verticalPosition: "top",
      });
      this.fetchExpense();
    });
  }

  editRentIncome(id) {
    this.router.navigate([`/main/editbalerrentincome/${id}`]);
  }

  editSellIncome(id) {
    this.router.navigate([`/main/editbalersellincome/${id}`]);
  }

  editExpense(id) {
    this.router.navigate([`/main/editbalerexpense/${id}`]);
  }
}
