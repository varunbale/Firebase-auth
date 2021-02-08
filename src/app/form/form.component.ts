import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl ,FormGroup, Validators} from '@angular/forms';
import {Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  profileForm:any;


  constructor(private api:ApiService,private router: Router,private spinner: NgxSpinnerService) { }

  ngOnInit():void {
    this.profileForm = new FormGroup({
      fname: new FormControl('',Validators.required),
      mname: new FormControl(''),
      lname: new FormControl('',Validators.required),
      dob: new FormControl('',Validators.required),
      ad1: new FormControl('',Validators.required),
      ad2: new FormControl(''),
      city: new FormControl('',Validators.required),
      zip: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      phone:new FormControl('',Validators.compose([Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])),
      lang: new FormControl('',Validators.required),
      country: new FormControl('',Validators.required)
      
        });
    
  }

  onFormSubmit(){
    if(!this.profileForm.valid){
      this.profileForm.markAllAsTouched();
      return 
    }
    console.log(this.profileForm.value);
    this.spinner.show();
    this.router.navigate(['thanks']);
    this.api.setUserData(this.profileForm.value).subscribe(
      (resp:any)=> {
        console.log(resp)
        this.spinner.hide();
      },
      (err:any) =>
      { console.error(err)
        this.spinner.hide();
        alert("Error");
      }
    );
  }

}
