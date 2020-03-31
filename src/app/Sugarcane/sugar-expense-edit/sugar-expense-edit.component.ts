import { MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { SugarcaneService } from './../../sugarcane.service';
import {Router,ActivatedRoute} from '@angular/router'
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms"

@Component({
  selector: 'app-sugar-expense-edit',
  templateUrl: './sugar-expense-edit.component.html',
  styleUrls: ['./sugar-expense-edit.component.css']
})
export class SugarExpenseEditComponent implements OnInit {
  updateForm:FormGroup
  id;
 expense;
  constructor(private snackbar:MatSnackBar,private details:SugarcaneService ,private route:ActivatedRoute,private router:Router,private fb:FormBuilder) {
    this.createForm()
   }

  createForm(){
    this.updateForm=this.fb.group({
      date:['',Validators.required],
      driverName:['',Validators.required],
      managerName:['',Validators.required],
      driverSalary:['',Validators.required],
      managerSalary:['',Validators.required],
      petrol:['',Validators.required],
      diesel:['',Validators.required],
      spare:['',Validators.required],
      service:['',Validators.required],
      foodCost:['',Validators.required],
      totalAmount:['',Validators.required]
    })
  }
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id= params.id;
      this.details.getExpenseDetailsById(this.id).subscribe(res=>{
        this.expense=res
        this.updateForm.get('date').setValue(this.expense.date)
        this.updateForm.get('driverName').setValue(this.expense.driverName)
        this.updateForm.get('managerName').setValue(this.expense.managerName)
        this.updateForm.get('driverSalary').setValue(this.expense.driverSalary)
        this.updateForm.get('managerSalary').setValue(this.expense.managerSalary)
        this.updateForm.get('petrol').setValue(this.expense.petrol)
        this.updateForm.get('diesel').setValue(this.expense.diesel)
        this.updateForm.get('spare').setValue(this.expense.spare)
        this.updateForm.get('service').setValue(this.expense.service)
        this.updateForm.get('foodCost').setValue(this.expense.foodCost)
        this.updateForm.get('totalAmount').setValue(this.expense.totalAmount)
      })
    })

  }
  
  updateSugarExpense(driverName,managerName,driverSalary,managerSalary,
    date,petrol,diesel,service,spare,foodCost,totalAmount){
      console.log(driverName,managerName,driverSalary,managerSalary,
        date,petrol,diesel,service,spare,foodCost,totalAmount)
      this.details.updateSugarExpense(this.id,driverName,managerName,driverSalary,managerSalary,
        date,petrol,diesel,service,spare,foodCost,totalAmount).subscribe(()=>{
          this.snackbar.open("Updated Successfully",'',{
            duration:5000,
            verticalPosition:'top'
          })
          this.router.navigate(['/main/sugarmanage']);
        })

      }

}
