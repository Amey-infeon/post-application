import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetUserDetailsService {
  ud: any;
  ua: any;
  currentUserID: any;

  constructor() { }
  getUser(){
   let ud:any=localStorage.getItem('userList');
   let ua:any = JSON.parse(this.ud);
   let currentUserID=this.ua['id123'].userId; 
   return currentUserID;
  }
  getPass(){
    let pass= this.ua['id123'].password;
    return pass;
  }
  isLoggedIn():boolean {
    if (this.ua == null) {
      return false;
      //return this.isLoggedIn();
    }
    else {
      return true;
    }
  }
}
