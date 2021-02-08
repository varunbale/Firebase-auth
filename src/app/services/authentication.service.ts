import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import firebase from 'firebase/app';
import 'firebase/auth';
@Injectable({
providedIn: 'root'
})
 
export class AuthenticationService {
userData: Observable<any>;
 
constructor(private angularFireAuth: AngularFireAuth) {
this.userData = angularFireAuth.authState;
}
 
/* Sign up */
SignUp(email: string, password: string) {
this.angularFireAuth
.createUserWithEmailAndPassword(email, password)
.then(res => {
console.log('You are Successfully signed up!', res);
})
.catch(error => {
console.log('Something is wrong:', error.message);
});
}
 
/* Sign in */
SignIn(email: string, password: string) {
this.angularFireAuth
.signInWithEmailAndPassword(email, password)
.then(res => {
console.log('You are Successfully logged in!'); 
})
.catch(err => {
console.log('Something is wrong:',err.message);
});
}
 
/* Sign out */
SignOut() {
this.angularFireAuth
.signOut();
}
 
}