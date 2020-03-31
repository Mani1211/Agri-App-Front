import { MatSnackBar } from '@angular/material';
import { RicePlantService } from './../../rice-plant.service';
import { Component} from '@angular/core';
import {Router} from '@angular/router'
import { FormGroup, FormBuilder, Validators } from "@angular/forms"






@Component({
  selector: 'rice-income',
  templateUrl: './rice-income.component.html',
  styleUrls: ['./rice-income.component.css']
})
export class RiceIncomeComponent  {
  createForm: FormGroup;

 
  
  constructor(private snackbar:MatSnackBar,private details:RicePlantService ,private router:Router,private fb:FormBuilder){
    this.createForm=this.fb.group({
    date:['',Validators.required],
  customerName:['',Validators.required],
  customerPlace:['',Validators.required],
  billNumber:['',Validators.required],
  numberOfAcres:['',Validators.required],
  costPerAcre:['',Validators.required],
  totalAmount:['',Validators.required],
  advance:['',Validators.required],
  balance:['',Validators.required],
  amountGiven:['',Validators.required]
    })
  }

  addRiceIncome(date,customerName,customerPlace, billNumber,numberOfAcre,costPerAcre,totalAmount,advance,balance,amountGiven){
    this.details.addRiceIncome(date,customerName,customerPlace, billNumber,numberOfAcre,
      costPerAcre,totalAmount,advance,balance,amountGiven).subscribe(()=>{
        this.snackbar.open("Added Successfully",'',{
          duration:5000,
          verticalPosition:'top'
        })
        this.router.navigate(['/main/ricedetails'])
    })
}


}
