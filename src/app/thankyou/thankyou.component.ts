import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {
   @Output() isLogout= new EventEmitter<void>()
  constructor(public firebaseService:FirebaseService,private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
   this.firebaseService.logout()
   this.isLogout.emit()
   this.router.navigate(['home'])
  }

}
