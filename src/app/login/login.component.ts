import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
username:String;
password:String;
  constructor(private router:Router) {
    
   }

  
  
  login(){
    console.log(this.username,this.password ,"fvv")
    if(this.username === 'admin' && this.password === 'admin'){
    
      this.router.navigate(['/main']);
  }

    else{
      this.router.navigate(['/login',alert("Enter correct username and password")]);
    }
  }
}
