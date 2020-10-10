import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { SugarcaneService } from "../../sugarcane.service";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";

import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";

@Component({
  selector: "sugar-details",
  templateUrl: "./sugar-details.component.html",
  styleUrls: ["./sugar-details.component.css"],
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
export class SugarDetailsComponent implements OnInit {
  createForm: FormGroup;
  incomeDetails = [];
  filterIncome = [];
  expenseDetails = [];
  userId;

  totalIncome = 0;
  totalExpense = 0;
  totalBalance = 0;
  incomeDetails1: MatTableDataSource<any>;
  expenseDetails1: MatTableDataSource<any>;
  searchKey1: string;
  searchKey2: string;
  expandedElement;
  expandedElement2;
  filterDataIncome = 0;
  filterDataTons = 0;
  filterDataExpense = 0;
  filterDataBalance = 0;

  @ViewChild(MatSort) sort1: MatSort;
  @ViewChild(MatPaginator) paginator1: MatPaginator;
  @ViewChild(MatSort) sort2: MatSort;
  @ViewChild(MatPaginator) paginator2: MatPaginator;

  constructor(
    private details: SugarcaneService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm = this.fb.group({
      fromDate: [""],
      toDate: [""],
    });
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
        this.incomeDetails = data;
        // this.filterData(this.fromDate,this.toDate);
        this.incomeDetails1 = new MatTableDataSource(data);
        this.incomeDetails1.sort = this.sort1;
        this.incomeDetails1.paginator = this.paginator1;
        console.log("Data requested....", this.incomeDetails);
        this.totalSugarIncome();
      });
  }
  fetchExpense() {
    this.details
      .getExpenseDetailsByUserId(this.userId)
      .subscribe((data: any) => {
        this.expenseDetails = data;
        this.expenseDetails1 = new MatTableDataSource(data);
        this.expenseDetails1.sort = this.sort1;
        this.expenseDetails1.paginator = this.paginator1;
        console.log("Data requested....");
        this.totalSugarExpense();
        this.totalSugarBalance();
      });
  }

  totalSugarIncome() {
    for (let i = 0; i < this.incomeDetails.length; i++) {
      this.totalIncome = this.totalIncome + this.incomeDetails[i].amountGiven;
    }
    return console.log(this.totalIncome);
  }

  totalSugarExpense() {
    for (let i = 0; i < this.expenseDetails.length; i++) {
      this.totalExpense =
        this.totalExpense + this.expenseDetails[i].totalAmount;
    }
    return console.log(this.totalIncome);
  }

  totalSugarBalance() {
    for (let i = 0; i < this.incomeDetails.length; i++) {
      this.totalBalance += this.incomeDetails[i].balance;
    }
    return console.log(this.totalBalance);
  }

  onSearchClear() {
    this.searchKey1 = "";
    this.searchKey2 = "";
    this.applyFilter();
  }

  clearData() {
    this.filterDataExpense = 0;
    this.filterDataIncome = 0;
    this.filterDataBalance = 0;
    this.filterDataTons = 0;
  }
  applyFilter() {
    this.incomeDetails1.filter = this.searchKey1.trim().toLowerCase();
    this.expenseDetails1.filter = this.searchKey2.trim().toLowerCase();
  }

  filterData(fromDate, toDate) {
    console.log(fromDate, toDate);
    var result = this.incomeDetails.filter((income) => {
      return income.date >= fromDate && income.date <= toDate;
    });

    var result1 = this.expenseDetails.filter((expense) => {
      return expense.date >= fromDate && expense.date <= toDate;
    });

    console.log(result, "filtered income data");
    console.log(result1, "filtered expense data");

    for (let i = 0; i < result.length; i++) {
      this.filterDataIncome += result[i].amountGiven;
      console.log(this.filterDataIncome, "income");
      this.filterDataTons += result[i].totalTons;
      console.log(this.filterDataTons, "tons");
      this.filterDataBalance += result[i].balance;
      console.log(this.filterDataBalance, "balance");
    }
    console.log(this.filterDataIncome, this.filterDataTons);

    for (let i = 0; i < result1.length; i++) {
      this.filterDataExpense += result1[i].totalAmount;
    }
    console.log(this.filterDataExpense, "expense");
  }
}
