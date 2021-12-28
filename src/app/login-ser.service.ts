import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginSerService {

  constructor() { }
  tf =false;
  cuser:any;

  getLoginCreds(id:any,pass:any){
    let cid=id;
    let cpass=pass;
    //get local storage data
    let udata:any = [];
    let u:any = localStorage.getItem("UserData");
     
    if(u == null){
     udata=[];
    }else{
     udata = JSON.parse(u);
    }
    udata.some((element:any) => {
      if(element.userid == cid && element.password == cpass){
        this.tf=true;
        this.cuser=cid;
        console.log("from service true", this.tf);
        localStorage.setItem("token",cid); 
      }
      else{
        console.log("from service false", this.tf);
      }
    });
    return this.tf;
  }

  loggedin(){
    return localStorage.getItem("token");
  }
}
