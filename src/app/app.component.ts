import { LoginSerService } from './login-ser.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'office-system';

  //passing data from child to parent
  
  // shareData(data: any){
  //   console.log(data);
  // }

  
  constructor(private router:Router,public ls:LoginSerService) { }
  ngOnInit(): void {
    
  }
  onCheck(){
    return localStorage.getItem("token");
  }
  // public Loggedin(){
  //   console.log("current user is" +this.cu);
    // let user = this.authuserservice.authUser();
    // console.log("current user is" +user);
    // return user;
    //return localStorage.getItem('userdata');
  //}
  onLogout(){
    localStorage.removeItem("token");
    alert("Logged Out..!");
    this.ls.tf = false;
    this.router.navigate(['login']);
  }
}
