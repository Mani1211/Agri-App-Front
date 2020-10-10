import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { BalerService } from "./../../balerent.service";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { BalersellService } from "src/app/balersell.service";

@Component({
  selector: "app-baler-details",
  templateUrl: "./baler-details.component.html",
  styleUrls: ["./baler-details.component.css"],
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
export class BalerDetailsComponent implements OnInit {
  userId;
  rentIncomeDetails = [];
  sellIncomeDetails = [];
  expenseDetails = [];
  rentIncomeDetails1: MatTableDataSource<any>;
  sellIncomeDetails1: MatTableDataSource<any>;
  expenseDetails1: MatTableDataSource<any>;
  totalRentIncome = 0;
  totalSellIncome = 0;
  totalRentBales = 0;
  totalSellBales = 0;
  totalExpense = 0;
  totalRentBalance = 0;
  totalSellBalance = 0;
  searchKey1: string;
  searchKey2: string;
  searchKey3: String;
  expandedElement1;
  expandedElement2;
  expandedElement3;
  @ViewChild(MatSort) sort1: MatSort;
  @ViewChild(MatPaginator) paginator1: MatPaginator;
  @ViewChild(MatSort) sort2: MatSort;
  @ViewChild(MatPaginator) paginator2: MatPaginator;
  @ViewChild(MatSort) sort3: MatSort;
  @ViewChild(MatPaginator) paginator3: MatPaginator;

  constructor(
    private router: Router,
    private balerRent: BalerService,
    private balerSell: BalersellService
  ) {}

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
  ];

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
        this.rentIncomeDetails = data;
        console.log("income", this.rentIncomeDetails);
        this.rentIncomeDetails1.sort = this.sort1;
        this.rentIncomeDetails1.paginator = this.paginator1;
        console.log("Data requested....", this.rentIncomeDetails);
        this.totalIncomeRent();
        this.totalrentBales();
        this.totalBalanceRent();
      });
  }

  fetchSellIncomes() {
    this.balerSell
      .getIncomeDetailsByUserId(this.userId)
      .subscribe((data: any) => {
        this.sellIncomeDetails1 = new MatTableDataSource(data);
        this.sellIncomeDetails = data;
        console.log("income", this.sellIncomeDetails);
        this.sellIncomeDetails1.sort = this.sort2;
        this.sellIncomeDetails1.paginator = this.paginator2;
        console.log("Data requested....", this.sellIncomeDetails);
        this.totalIncomeSell();
        this.totalsellBales();
      });
  }
  fetchExpense() {
    this.balerRent
      .getExpenseDetailsByUserId(this.userId)
      .subscribe((data: any) => {
        this.expenseDetails = data;

        this.expenseDetails1 = new MatTableDataSource(data);
        this.expenseDetails1.sort = this.sort3;
        this.expenseDetails1.paginator = this.paginator3;
        console.log("Data requested....");
        this.totalBalerExpense();
        this.totalBalanceSell();
      });
  }

  totalrentBales() {
    for (let i = 0; i < this.rentIncomeDetails.length; i++) {
      this.totalRentBales =
        this.totalRentBales + this.rentIncomeDetails[i].numberOfBales;
    }
    return console.log(this.totalRentBales);
  }

  totalsellBales() {
    for (let i = 0; i < this.sellIncomeDetails.length; i++) {
      this.totalSellBales =
        this.totalSellBales + this.sellIncomeDetails[i].numberOfBales;
    }
    return console.log(this.totalSellBales);
  }

  totalIncomeRent() {
    for (let i = 0; i < this.rentIncomeDetails.length; i++) {
      this.totalRentIncome =
        this.totalRentIncome + this.rentIncomeDetails[i].amountGiven;
    }
    return console.log(this.totalRentIncome);
  }

  totalIncomeSell() {
    for (let i = 0; i < this.sellIncomeDetails.length; i++) {
      this.totalSellIncome =
        this.totalSellIncome + this.sellIncomeDetails[i].amountGiven;
    }
    return console.log(this.totalRentIncome);
  }

  totalBalerExpense() {
    for (let i = 0; i < this.expenseDetails.length; i++) {
      this.totalExpense =
        this.totalExpense + this.expenseDetails[i].totalAmount;
    }
    return console.log(this.totalSellIncome);
  }

  totalBalanceRent() {
    for (let i = 0; i < this.rentIncomeDetails.length; i++) {
      this.totalRentBalance =
        this.totalRentBalance + this.rentIncomeDetails[i].balance;
    }
    return console.log(this.totalRentBalance);
  }
  totalBalanceSell() {
    for (let i = 0; i < this.sellIncomeDetails.length; i++) {
      this.totalSellBalance =
        this.totalSellBalance + this.sellIncomeDetails[i].balance;
    }
    return console.log("jjjk", this.totalSellBalance);
  }
}
