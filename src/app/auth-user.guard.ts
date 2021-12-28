import { LoginSerService } from './login-ser.service';
import { Injectable } from '@angular/core';
import { CanActivate, Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthUserGuard implements CanActivate {
  constructor(private auth:LoginSerService,private rout:Router){}
  canActivate():boolean{
    if(this.auth.loggedin()){
      return true;
    }
    else{
      this.rout.navigate(['login']);
      return false;
    }
  }
  
}
