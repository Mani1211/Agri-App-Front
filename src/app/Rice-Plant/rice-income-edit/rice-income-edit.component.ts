import { MatSnackBar } from '@angular/material';

import { RicePlantService } from './../../rice-plant.service';
import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import { FormGroup, FormBuilder, Validators } from "@angular/forms"



@Component({
  selector: 'app-rice-income-edit',
  templateUrl: './rice-income-edit.component.html',
  styleUrls: ['./rice-income-edit.component.css']
})
export class RiceIncomeEditComponent  {
updateForm:FormGroup;
id;
income;
  constructor(private snackbar:MatSnackBar,private details:RicePlantService,private router:Router, private route:ActivatedRoute, private fb:FormBuilder) 
  {
    this.createForm();
   }

ngOnInit(){
  this.route.params.subscribe(params=>{
    this.id= params.id;
    this.details.getIncomeDetailsById(this.id).subscribe(res=>{
      this.income=res
      this.updateForm.get('date').setValue(this.income.date)
      this.updateForm.get('customerName').setValue(this.income.customerName)
      this.updateForm.get('customerPlace').setValue(this.income.customerPlace)
      this.updateForm.get('billNumber').setValue(this.income.billNumber)
      this.updateForm.get('numberOfAcre').setValue(this.income.numberOfAcre)
      this.updateForm.get('costPerAcre').setValue(this.income.costPerAcre)
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
customerName:['',Validators.required],
customerPlace:['',Validators.required],
billNumber:['',Validators.required],
numberOfAcre:['',Validators.required],
costPerAcre:['',Validators.required],
totalAmount:['',Validators.required],
advance:['',Validators.required],
balance:['',Validators.required],
amountGiven:['',Validators.required]
  })
}

updateRiceIncome(date,customerName,customerPlace,billNumber,numberOfAcre,costPerAcre,totalAmount,advance,balance,amountGiven){
  console.log(date,customerName,customerPlace,billNumber,numberOfAcre,costPerAcre,totalAmount,advance,balance,amountGiven)
  this.details.updateRiceIncome(this.id,date,customerName,customerPlace,billNumber,numberOfAcre,costPerAcre,totalAmount,advance,balance,amountGiven).subscribe(res=>{
    this.snackbar.open("Updated Successfully",'',{
      duration:5000,
      verticalPosition:'top'
    })
    this.router.navigate(['/main/ricedetails'])
  })

}
}
