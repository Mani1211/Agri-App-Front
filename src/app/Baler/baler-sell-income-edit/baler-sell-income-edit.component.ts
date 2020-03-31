import { MatSnackBar } from '@angular/material';
import { BalersellService } from './../../balersell.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-baler-sell-income-edit',
  templateUrl: './baler-sell-income-edit.component.html',
  styleUrls: ['./baler-sell-income-edit.component.css']
})
export class BalerSellIncomeEditComponent implements OnInit {
  updateForm:FormGroup
  id;
 income;
  constructor(private snackbar:MatSnackBar,private router:Router, private route:ActivatedRoute, private fb:FormBuilder,private baler:BalersellService) { 
    this.createForm()
  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id= params.id;
      this.baler.getIncomeDetailsById(this.id).subscribe(res=>{
        this.income=res
        this.updateForm.get('date').setValue(this.income.date)
        this.updateForm.get('buyerName').setValue(this.income.buyerName)
        this.updateForm.get('buyerCellNumber').setValue(this.income.buyerCellNumber)
        this.updateForm.get('vehicleNumber').setValue(this.income.vehicleNumber)
        this.updateForm.get('numberOfBales').setValue(this.income.numberOfBales)
        this.updateForm.get('costPerBales').setValue(this.income.costPerBales)
        this.updateForm.get('totalAmount').setValue(this.income.totalAmount)
        this.updateForm.get('advance').setValue(this.income.advance)
        this.updateForm.get('balance').setValue(this.income.balance)
        this.updateForm.get('amountGiven').setValue(this.income.amountGiven)
      
      })
    })
  }

  createForm(){
    this.updateForm=this.fb.group({
      date:['',Validators.required],
    buyerName:['',Validators.required],
    buyerCellNumber:['',Validators.required],
    vehicleNumber:['',Validators.required],
    numberOfBales:['',Validators.required],
    costPerBales:['',Validators.required],
    totalAmount:['',Validators.required],
    advance:['',Validators.required],
    balance:['',Validators.required],
    amountGiven:['',Validators.required]
      })
  }

  updateIncome(date,buyerName,buyerCellNumber,vehicleNumber,numberOfBales,costPerBales,totalAmount,advance,balance,amountGiven){
    this.baler.updateIncome(this.id,date,buyerName,buyerCellNumber,vehicleNumber,numberOfBales,costPerBales,totalAmount,advance,balance,amountGiven).subscribe(()=>{
      this.snackbar.open("Updated Successfully",'',{
        duration:5000,
        verticalPosition:'top'
      })
      this.router.navigate(['/main/balerdetails'])
    })
}


}

