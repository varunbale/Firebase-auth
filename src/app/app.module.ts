import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import {FirebaseService} from './services/firebase.service';



import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import {RouterModule,Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';




import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { FormComponent } from './form/form.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';


var config = {
  apiKey: "AIzaSyD4n9juLlyDJhbkqAoSGfMgA3_9CO7LA1I",
  authDomain: "assignment-2-f949d.firebaseapp.com",
  databaseURL: "https://assignment-2-f949d-default-rtdb.firebaseio.com",
  projectId: "assignment-2-f949d",
  storageBucket: "assignment-2-f949d.appspot.com",
  messagingSenderId: "725022410930",
  appId: "1:725022410930:web:cbe85a9626eda359c461ab"
};


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ThankyouComponent,
    FormComponent,
    AdminComponent,
    RegisterComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
    ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
