import { AuthService } from './auth.service';
import { Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { CanActivate ,RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private authService:AuthService,private router:Router) { }

 canActivate(route,state:RouterStateSnapshot){

if(this.authService.isLoggedin) return true
this.router.navigate(['/login']);
}
}
