import { RouterModule } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import{ FormGroup,FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  @Input() hero: any;
  // @Output() shareData:EventEmitter<any> = new EventEmitter();
  constructor(private router:Router) { }
  registrationform!:any;

  ngOnInit(): void {
    this.registrationform = new FormGroup ({
      userid:new FormControl('',Validators.required),
      fname:new FormControl(''),
      password: new FormControl('',Validators.required)
    });
    // this.shareData.emit("registered data shared");
  }
  onRegister(value:any){

    let userdata:any = localStorage.getItem("UserData");
    if(userdata == null){
        userdata = [];
    }else{
      userdata = JSON.parse(userdata);
    }
    console.log(userdata);
    let userobj = {uid : 0, userid : "" , name : "", password : ""};
    let len = userdata.length + 1;
    console.log("length is",len);
    userobj.uid = len;
    userobj.name = this.registrationform.value['fname'];
    userobj.password = this.registrationform.value['password'];
    userobj.userid = this.registrationform.value['userid'];
    console.log(JSON.stringify(userobj));
    userdata.push(userobj);
    console.log(userdata);
    localStorage.setItem("UserData",JSON.stringify(userdata))
    alert("Registered Successfully.");
    this.registrationform.reset();
    this.router.navigate(['login']);



    //code for saperate new user
    // let uid=this.registrationform.value['userid'];
    // console.log(uid);
    // localStorage.setItem(uid,JSON.stringify(this.registrationform.value));
    // this.registrationform.reset();
    // this.router.navigate(['login']);

    //code for new user in userList
    //let uid1=this.registrationform.value['userid'];
    //JSON.stringify(this.registrationform.value)
    //console.log(JSON.stringify(this.registrationform.value));
    //localStorage.setItem('userList',JSON.stringify(this.registrationform.value));
    
    //  let ud:any=localStorage.getItem('userData');
    //  console.log("data before is : "+ ud);
    //  let ua = JSON.parse(ud);
    //  console.log("data is : "+ ua['id123'].userId);
    //  let len=Object.keys(ua).length;
    //  console.log( "Length is : "+len);
    //localStorage.setItem(ua['3'].userId,JSON.stringify(this.registrationform.value));
    //localStorage.setItem('user123',JSON.stringify(this.registrationform.value));
    

    // let currentUserID=ua[0].userId;
    // let currentUserPassword=ua[0].pass;
    // console.log("current user is : "+ currentUserID);
    // this.shareUserID=currentUserID;
    
  }
  

}
