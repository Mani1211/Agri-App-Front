import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedin=false;

  login(username,password){
    if(username === 'admin' && password === 'admin'){

    this.isLoggedin = true;
  
    localStorage.setItem('login','1')
     return true;
    }
  }

 
isLogin(){

}
}