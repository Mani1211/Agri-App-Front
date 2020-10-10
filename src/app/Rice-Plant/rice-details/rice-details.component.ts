import { Component, OnInit, ViewChild } from "@angular/core";
import { RicePlantService } from "../../rice-plant.service";
import { Router } from "@angular/router";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";

@Component({
  selector: "rice-details",
  templateUrl: "./rice-details.component.html",
  styleUrls: ["./rice-details.component.css"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      ),
    ]),
  ],
})
export class RiceDetailsComponent implements OnInit {
  userId;

  incomeDetails = [];
  expenseDetails = [];
  incomeDetails1: MatTableDataSource<any>;
  expenseDetails1: MatTableDataSource<any>;
  totalIncome = 0;
  totalExpense = 0;
  totalBalance = 0;
  searchKey1: string;
  searchKey2: string;
  fromDate = "";
  toDate = "";
  expandedElement;
  expandedElement2;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatSort) sort1: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private details: RicePlantService, private router: Router) {}

  displayedColumns1: string[] = [
    "date",
    "customerName",
    "customerPlace",
    "billNumber",
    "numberOfAcre",
    "costPerAcre",
    "totalAmount",
    "advance",
    "balance",
    "amountGiven",
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

  fetchIncomes() {
    this.details
      .getIncomeDetailsByUserId(this.userId)
      .subscribe((data: any) => {
        this.incomeDetails1 = new MatTableDataSource(data);
        this.incomeDetails1.sort = this.sort;
        this.incomeDetails1.paginator = this.paginator;
        this.incomeDetails = data;
        console.log("Data requested....", this.incomeDetails);
        this.totalRiceIncome();
        this.totalRiceBalance();
      });
  }
  fetchExpense() {
    this.details
      .getExpenseDetailsByUserId(this.userId)
      .subscribe((data: any) => {
        this.expenseDetails = data;

        this.expenseDetails1 = new MatTableDataSource(data);
        this.expenseDetails1.sort = this.sort;
        this.expenseDetails1.paginator = this.paginator;
        console.log("Data requested....");
        this.totalRiceExpense();
      });
  }

  onSearchClear() {
    this.searchKey1 = " ";
    this.searchKey2 = " ";
    this.applyFilter();
  }

  applyFilter() {
    this.incomeDetails1.filter = this.searchKey1.trim().toLowerCase();
    this.expenseDetails1.filter = this.searchKey2.trim().toLowerCase();
  }
  totalRiceIncome() {
    for (let i = 0; i < this.incomeDetails.length; i++) {
      this.totalIncome = this.totalIncome + this.incomeDetails[i].amountGiven;
    }
    return console.log(this.totalIncome);
  }

  totalRiceExpense() {
    for (let i = 0; i < this.expenseDetails.length; i++) {
      this.totalExpense =
        this.totalExpense + this.expenseDetails[i].totalAmount;
    }
    return console.log(this.totalIncome);
  }

  totalRiceBalance() {
    for (let i = 0; i < this.incomeDetails.length; i++) {
      this.totalBalance = this.totalBalance + this.incomeDetails[i].balance;
    }
    return console.log(this.totalBalance);
  }
}
