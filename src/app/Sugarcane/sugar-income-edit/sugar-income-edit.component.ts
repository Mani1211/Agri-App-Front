import { MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { SugarcaneService } from './../../sugarcane.service';
import {Router,ActivatedRoute} from '@angular/router'
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms"

@Component({
  selector: 'app-sugar-income-edit',
  templateUrl: './sugar-income-edit.component.html',
  styleUrls: ['./sugar-income-edit.component.css']
})
export class SugarIncomeEditComponent implements OnInit {
  updateForm: FormGroup;
  id;
  income;
  constructor(private snackbar:MatSnackBar,private details:SugarcaneService ,private route:ActivatedRoute,private router:Router,private fb:FormBuilder) { 
 this.createForm();
  }
createForm(){
  this.updateForm=this.fb.group({
    date:['',Validators.required],
  customerName:['',Validators.required],
  customerPlace:['',Validators.required],
  ryotNumber:['',Validators.required],
  plotNumber:['',Validators.required],
  costPerTon:['',Validators.required],
  totalTons:['',Validators.required],
  amount:['',Validators.required],
  advance:['',Validators.required],
  balance:['',Validators.required],
  amountGiven:['',Validators.required]
    })
}
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id= params.id;
      this.details.getIncomeDetailsById(this.id).subscribe(res=>{
        this.income=res
        this.updateForm.get('date').setValue(this.income.date)
        this.updateForm.get('customerName').setValue(this.income.customerName)
        this.updateForm.get('customerPlace').setValue(this.income.customerPlace)
        this.updateForm.get('ryotNumber').setValue(this.income.ryotNumber)
        this.updateForm.get('plotNumber').setValue(this.income.plotNumber)
        this.updateForm.get('totalTons').setValue(this.income.totalTons)
        this.updateForm.get('costPerTon').setValue(this.income.costPerTon)
        this.updateForm.get('amount').setValue(this.income.amount)
        this.updateForm.get('advance').setValue(this.income.advance)
        this.updateForm.get('balance').setValue(this.income.balance)
        this.updateForm.get('amountGiven').setValue(this.income.amountGiven)
      
      })
    })
  }

  
  updateSugarIncome(date,customerName,customerPlace,ryotNumber,plotNumber,costPerTon,totalTons,amount,advance,balance,amountGiven){
    console.log(date,customerName,customerPlace,ryotNumber,plotNumber,costPerTon,totalTons,amount,advance,balance,amountGiven)
    this.details.updateSugarIncome(this.id,date,customerName,customerPlace,ryotNumber,plotNumber,
      costPerTon,totalTons,amount,advance,balance,amountGiven).subscribe(()=>{
        this.snackbar.open("Updated Successfully",'',{
          duration:5000,
          verticalPosition:'top'
        })
        this.router.navigate(['/main/sugarmanage'])
    })
}

}
