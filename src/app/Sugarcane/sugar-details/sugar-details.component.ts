import { Component, OnInit,ViewChild } from '@angular/core';
import { Router} from '@angular/router'
import {SugarcaneService} from '../../sugarcane.service'
import {MatTableDataSource, MatSort,MatPaginator } from '@angular/material'
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'sugar-details',
  templateUrl: './sugar-details.component.html',
  styleUrls: ['./sugar-details.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class SugarDetailsComponent implements OnInit {
  incomeDetails=[];
  expenseDetails=[];
  totalIncome=0;
  totalExpense=0;
  totalBalance=0;
  incomeDetails1:MatTableDataSource<any>
  expenseDetails1:MatTableDataSource<any>
  searchKey1: string;
  searchKey2: string;
  expandedElement;
  expandedElement2;

  @ViewChild(MatSort) sort1:MatSort
  @ViewChild(MatPaginator) paginator1:MatPaginator
  @ViewChild(MatSort) sort2:MatSort
  @ViewChild(MatPaginator) paginator2:MatPaginator
  

  constructor(private details:SugarcaneService,private router:Router) { }

  displayedColumns1: string[] = ['date','customerName','customerPlace','ryotNumber','plotNumber','costPerTon','totalTons','amount','advance','balance','amountGiven'];

  displayedColumns2: string[] = ['date','driverName','managerName','driverSalary','managerSalary','petrol','diesel','service','spare','foodCost','totalAmount'];

  ngOnInit() {
 
    this.fetchIncomes();
    this.fetchExpense();
  }

  fetchIncomes(){
    this.details.getIncomeDetails().subscribe((data:any) =>{
            this.incomeDetails=data;
            this.incomeDetails1= new MatTableDataSource(data)
            this.incomeDetails1.sort=this.sort1
            this.incomeDetails1.paginator=this.paginator1
            console.log("Data requested....",this.incomeDetails);
            this.totalSugarIncome();
            
    })
   }
   fetchExpense(){
    this.details.getExpenseDetails().subscribe((data:any) =>{
        
      this.expenseDetails=data;
      this.expenseDetails1=new MatTableDataSource(data)
      this.expenseDetails1.sort=this.sort1
      this.expenseDetails1.paginator=this.paginator1
            console.log("Data requested....");
            this.totalSugarExpense();
            this.totalSugarBalance();
    })
  }

    totalSugarIncome(){
      for(let i=0;i<this.incomeDetails.length;i++){
        this.totalIncome = this.totalIncome + this.incomeDetails[i].amountGiven;
      }
      return console.log(this.totalIncome);
    }  

    totalSugarExpense(){
      for(let i=0;i<this.expenseDetails.length;i++){
        this.totalExpense = this.totalExpense + this.expenseDetails[i].totalAmount;
      }
      return console.log(this.totalIncome);
    }  

    totalSugarBalance(){
      for(let i=0;i<this.incomeDetails.length;i++){
        this.totalBalance = this.totalBalance + this.incomeDetails[i].balance;
      }
      return console.log(this.totalBalance);
    }  

    onSearchClear() {
      this.searchKey1 = "";
      this.searchKey2 = "";
      this.applyFilter();
    }
    
    applyFilter() {
      this.incomeDetails1.filter = this.searchKey1.trim().toLowerCase();
      this.expenseDetails1.filter = this.searchKey2.trim().toLowerCase();
      
      
    }



}

