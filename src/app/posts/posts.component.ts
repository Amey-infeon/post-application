import { LoginSerService } from './../login-ser.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  //postList:any = [];
  constructor(public lg:LoginSerService) { }

  display = "none"; 
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

  postForm = new FormGroup({
    postHeading: new FormControl(''),
    postContent: new FormControl('')
  });
  public postTitle:string = "trial post";
  public postBody = " this is trial Post";
  public postBy = "";

   showdata(){
     
   }
   pd:any = localStorage.getItem('NewData');
   pa:any = JSON.parse(this.pd);
   postList : any=this.pa;
  
   uid:any;

  ngOnInit(): void { 
      // this.pa.forEach((element:any) => {
      //   this.postTitle = element.heading;
      // }); 
      // this.uid = this.lg.cuser;
      this.uid = localStorage.getItem("token");
  }
  post: any = {};
  onPostSubmit(){

    let c:any = localStorage.getItem("NewData");
    console.log(c);
    if(c == null) {
      c = [];
    }else{
      c = JSON.parse(c);
    }
    //set data interpollation to display whole data
    //this.postList = c;
    //set item
    let obj = {id:0,userid:"",heading:"",content:""};
    obj.id = c.length + 1;
    obj.heading = this.postForm.value['postHeading'];
    obj.content = this.postForm.value['postContent'];
    obj.userid = this.uid;
    c.push(obj);
    localStorage.setItem("NewData",JSON.stringify(c));
    this.postForm.reset();
    this.onCloseHandled();
    alert("Post updated!");
    let pd1:any = localStorage.getItem('NewData');
    let pa1 = JSON.parse(pd1);
    this.postList=pa1;
  }
  showMyPosts(){
    
    let mypst:any=[];
    this.pa.forEach((element:any) => {
      if(element.userid == this.uid){
        mypst.push(element);
      }
    });
    this.postList=mypst;
  }
  allPosts(){
    this.postList= this.pa;
  }
  onUpdate(){
    //update code
//     let cc = localStorage.getItem("NewData");
//     console.log(cc)
  
//     let idToSearch = 2;
//     let nameToupdate = "vinayak";
//     let c:any = [];
//     c = localStorage.getItem("NewData");
//     console.log(c);
//     if(c == null) {
//       c = [];
//     }else{
//       c = JSON.parse(c);
//     }

// c.forEach((element:any) => {
//   if(element.id == 2){
//     element.heading = nameToupdate;
//   }
// });

//   localStorage.setItem("NewData",JSON.stringify(c))
//   console.log(c);
//   }

  }
  
  searchId(){

  }

}
