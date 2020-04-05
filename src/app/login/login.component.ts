import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
username:String;
password:String;
createForm:FormGroup

  constructor(private route:ActivatedRoute,private router:Router,private auth:AuthService,private fb:FormBuilder) {
    this.createForm=this.fb.group({
      username:[''],
      password:['']
    })
   }

  

   login(username,password){
     console.log(username,password)
if(this.auth.login(username,password)){
  // let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl')
  this.router.navigate(['/main'])
}
else{
      this.router.navigate(['/login',alert("Enter correct username and password")]);
    }

   }

}
