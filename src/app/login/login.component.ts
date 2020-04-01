import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { Router } from '@angular/router';



@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
username:String;
password:String;
createForm:FormGroup

  constructor(private router:Router,private auth:AuthService,private fb:FormBuilder) {
    this.createForm=this.fb.group({
      username:[''],
      password:['']
    })
   }

  

   login(username,password){
     console.log(username,password)
if(this.auth.login(username,password)){
  this.router.navigate(['/main']);
}


   }
  
  // login(){
  //   console.log(this.username,this.password ,"fvv")
  //   if(this.username === 'admin' && this.password === 'admin'){
    
  //     this.router.navigate(['/main']);
    
  // }

  //   else{
  //     this.router.navigate(['/login',alert("Enter correct username and password")]);
  //   }
  // }
}
