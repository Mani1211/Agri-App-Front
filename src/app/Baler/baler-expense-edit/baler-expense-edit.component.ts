import { MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { BalerService } from './../../balerent.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-baler-expense-edit',
  templateUrl: './baler-expense-edit.component.html',
  styleUrls: ['./baler-expense-edit.component.css']
})
export class BalerExpenseEditComponent implements OnInit {
  updateForm:FormGroup
  id;
 expense;
  constructor(private snackbar:MatSnackBar,private router:Router, private route:ActivatedRoute, private fb:FormBuilder,private baler:BalerService) {
    this.createForm();
   }


  createForm(){
    this.updateForm=this.fb.group({
      date:['',Validators.required],
      driverName:['',Validators.required],
      managerName:['',Validators.required],
      driverSalary:['',Validators.required],
      managerSalary:['',Validators.required],
      workerSalary:['',Validators.required],
      petrol:['',Validators.required],
      diesel:['',Validators.required],
      spare:['',Validators.required],
      service:['',Validators.required],
      foodCost:['',Validators.required],
      hayCost:['',Validators.required],
      juteCost:['',Validators.required],
      totalAmount:['',Validators.required]
    })
  }


  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id= params.id;
      this.baler.getExpenseDetailsById(this.id).subscribe(res=>{
        this.expense=res
        this.updateForm.get('date').setValue(this.expense.date)
        this.updateForm.get('driverName').setValue(this.expense.driverName)
        this.updateForm.get('managerName').setValue(this.expense.managerName)
        this.updateForm.get('driverSalary').setValue(this.expense.driverSalary)
        this.updateForm.get('workerSalary').setValue(this.expense.workerSalary)
        this.updateForm.get('managerSalary').setValue(this.expense.managerSalary)
        this.updateForm.get('petrol').setValue(this.expense.petrol)
        this.updateForm.get('diesel').setValue(this.expense.diesel)
        this.updateForm.get('spare').setValue(this.expense.spare)
        this.updateForm.get('service').setValue(this.expense.service)
        this.updateForm.get('foodCost').setValue(this.expense.foodCost)
        this.updateForm.get('hayCost').setValue(this.expense.hayCost)
        this.updateForm.get('juteCost').setValue(this.expense.juteCost)
        this.updateForm.get('totalAmount').setValue(this.expense.totalAmount)
      })
    })
  }



  updateExpense(driverName,managerName,driverSalary,managerSalary,
    date,petrol,diesel,spare,service,foodCost,totalAmount,workerSalary,hayCost,juteCost){
      console.log(driverName,managerName,driverSalary,managerSalary,
        date,petrol,diesel,spare,service,foodCost,totalAmount,workerSalary,hayCost,juteCost)
      this.baler.updateExpense(this.id,driverName,managerName,driverSalary,managerSalary,
        date,petrol,diesel,spare,service,foodCost,totalAmount,workerSalary,hayCost,juteCost).subscribe(()=>{
          this.snackbar.open("Updated Successfully",'',{
            duration:5000,
            verticalPosition:'top'
          })
          this.router.navigate(['/main/balermanage']);
        })

      }
}
