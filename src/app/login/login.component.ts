import { LoginSerService } from './../login-ser.service';
//import { LoginServiceService } from './../login-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm ,FormGroupDirective, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //public loginForm!: FormGroup
  //constructor(private formBuilder:FormBuilder) { }
  constructor(private router:Router,public ls:LoginSerService) { }
  // ,public ls:LoginSerService
  shareUserID:any ;
  sharePass:any;
  creds:any;
  //loginForm:any;
  loginForm = new FormGroup({
    userid: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
    });

  ngOnInit(): void {  
    this.shareUserID= this.loginForm.value['userid'];
    this.sharePass = this.loginForm.value['password'];
    
  }
  

  onLogin1(value: any){
    // this.lg.getLoginCreds();
    // this.creds = this.lg.tf;
    // console.log(this.creds);
    let verify = this.ls.getLoginCreds(this.loginForm.value['userid'],this.loginForm.value['password']);
    
    if(verify==true){
      alert("Success");
      this.loginForm.reset();
      this.router.navigate(['firstuser']);
    }else{
      alert("Invalid User!");
    }
    // code without service

    //get local storage data
    // let udata:any = [];
    // let u:any = localStorage.getItem("UserData");
    // if(u == null){
    //  udata=[];
    // }else{
    //  udata = JSON.parse(u);
    // }
    // udata.some((element:any) => {
      // if(element.userid == this.loginForm.value['userid'] && element.password == this.loginForm.value['password']){
      //   console.log("Valid user");
      //   this.ls.getLoginCreds(this.loginForm.value['userid'],this.loginForm.value['password']);
      //   alert("Success");
      //   this.loginForm.reset();
      //   this.router.navigate(['firstuser']);

      // }
    // });





//get form data
// let token=this.loginForm.value['userid'];
//   console.log("uid :" +token);
  
// let pw=this.loginForm.value['password'];
//   console.log("password :" +pw);

  // for validation 
   

    //get data localstorage
 
    // let ud:any=localStorage.getItem('userData');
    // let ua = JSON.parse(ud);
    // let currentUserID=ua[0].userId;
    // let currentUserPassword=ua[0].pass;
    // console.log("current user is : "+ currentUserID);
    // this.shareUserID=currentUserID;

    // let currentUserID=ua[token].userId;
    // let currentUserPassword=ua[token].password;
    //  console.log("current user is : "+ currentUserID);
    //this.shareUserID=currentUserID;
    
    
    //validate and login
    // if(token === UserArray['userid'] && pw === UserArray['password']){
      //console.log("shred id is :" +this.shareUserID);
    //   //console.log("shared pass is: "+this.sharePass);
    //   if(token === currentUserID && pw === currentUserPassword){
    //   alert("Success");
    //   this.loginForm.reset();

    //   this.router.navigate(['firstuser']);
    // }
    // else{
    //   alert("Invalid user");
    // }
    //redirect user
    
    
  }

  // onLogin(f:NgForm){
  //   this.UserId= localStorage.getItem('userdata');
  //   console.log("uid is : "+this.UserId);

  //   console.log("frm val: "+f.value);
    // var a = document.getElementById('UderId');
    //var a = user.;

    //console.log("id is :" + a);
    
    //const user = this.authuserservice.authUser(this.loginForm.value);
    // if(user){
    //   console.log("Login Success!");
    // }else{
    //   console.log("Login Not Success!");
    // }
  //}
}
