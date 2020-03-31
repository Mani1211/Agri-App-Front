
import { Component, OnInit ,ViewChild } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router'
import {RicePlantService} from '../../rice-plant.service'
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import {MatTableDataSource, MatSort,MatPaginator,MatSnackBar } from '@angular/material'


 
@Component({
  selector: 'app-rice-manage',
  templateUrl: './rice-manage.component.html',
  styleUrls: ['./rice-manage.component.css']
})
export class RiceManageComponent implements OnInit {
  incomeDetails:MatTableDataSource<any>
  expenseDetails:MatTableDataSource<any>
  @ViewChild(MatSort) sort1:MatSort
  @ViewChild(MatPaginator) paginator1:MatPaginator
  @ViewChild(MatSort) sort2:MatSort
  @ViewChild(MatPaginator) paginator2:MatPaginator
  id:String;
  updateForm:FormGroup
  searchKey1: string;
  searchKey2: string;
  constructor( private snackbar:MatSnackBar,private details:RicePlantService,private router:Router, private route:ActivatedRoute, private fb:FormBuilder) {
  //this.createIncomeForm();
   }


  displayedColumns1: string[] = ['date','customerName','customerPlace','billNumber','numberOfAcre','costPerAcre','totalAmount','advance','balance','amountGiven','actions'];

  displayedColumns2: string[] = ['date','driverName','managerName','driverSalary','managerSalary','petrol','diesel','service','spare','foodCost','totalAmount','actions'];



  ngOnInit() {
    this.fetchIncomes();
    this.fetchExpense();
  }


  // createIncomeForm(){
  //   this.updateForm=this.fb.group({
  //     date:['',Validators.required],
  //   customerName:['',Validators.required],
  //   customerPlace:['',Validators.required],
  //   billNumber:['',Validators.required],
  //   numberOfAcres:['',Validators.required],
  //   costPerAcre:['',Validators.required],
  //   totalAmount:['',Validators.required],
  //   advance:['',Validators.required],
  //   balance:['',Validators.required],
  //   amountGiven:['',Validators.required]
  //     })
  // }
  fetchIncomes(){
    this.details.getIncomeDetails().subscribe((data:any) =>{
            this.incomeDetails= new MatTableDataSource(data);
            this.incomeDetails.sort=this.sort1
            this.incomeDetails.paginator=this.paginator1
            console.log("Data requested....");
    })
   }

   fetchExpense(){
    this.details.getExpenseDetails().subscribe((data:any) =>{
            this.expenseDetails=new MatTableDataSource(data);
            this.expenseDetails.sort =this.sort2
            this.expenseDetails.paginator =this.paginator2
            console.log("Data requested....");
    })
   }



  deleteIncome(id){
    this.details.deleteIncomeDetailsById(id).subscribe(()=>{
      this.snackbar.open("Deleted Successfully",'',{
        duration:5000,
        verticalPosition:'top'
      })
      this.router.navigate(['/main/ricedetails'])
      this.fetchIncomes();
    })

  }

  deleteExpense(id){
    this.details.deleteExpenseDetailsById(id).subscribe(()=>{
      this.snackbar.open("Deleted Successfully",'',{
        duration:5000,
        verticalPosition:'top'
      })
      this.router.navigate(['/main/ricedetails'])
      this.fetchExpense();
    })
  }
 

editIncome(id){
  this.router.navigate([`/main/editriceincome/${id}`]);

}
editExpense(id){
  this.router.navigate([`/main/editriceexpense/${id}`]);

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
