import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  isSignedIn = false
  constructor(public firebaseService: FirebaseService,private router:Router ){}
    
  

  ngOnInit(): void {
    if(localStorage.getItem('user')!=null)
    this.isSignedIn=true
    else
    this.isSignedIn=false
  }

  async onSignUp(email:string,password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn){
    this.isSignedIn= true
    this.router.navigate(["form"])
    }
  }

  async onSignIn(email:string,password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn){
    this.isSignedIn= true
    this.router.navigate(["form"])
  }
  }

  handleLogout(){
    this.isSignedIn =false
  }

}
