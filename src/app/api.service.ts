import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  Base_URL= environment.Base_URL;


  constructor(private http:HttpClient) { }

  setUserData(user:any){
    return this.http.post(`${this.Base_URL}/api/user`,user);
   }
   
}
