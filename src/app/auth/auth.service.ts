import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  token: string = null;

  constructor(private router: Router) { }

  signupUser(email: string, password: string){
  	firebase.auth().createUserWithEmailAndPassword(email, password)
  		.then(
  			(response) => {
  				console.log(response);
  				firebase.auth().currentUser.getIdToken()
  					.then(
  						(token: string) => {
  							this.token = token;
  						}
					);
				this.router.navigate(['/recipes']);
  			}
		)
  		.catch(
  			error => {
  				alert(error.message);
  			}
		)
  }

  signinUser(email: string, password: string){
  	firebase.auth().signInWithEmailAndPassword(email, password)
  		.then(
  			(response) => {
				this.router.navigate(['/recipes']);
  				firebase.auth().currentUser.getIdToken()
  					.then(
  						(token: string) => {
  							this.token = token;
  						}
					);
  			}
		)
		.catch(
			error => console.log(error)
		);
  }

  getToken(){
  	if(firebase.auth().currentUser == null)
  	{
  		alert('You need to login first!');
  		this.router.navigate(['/signin']);
  		return null;
  	}
  	firebase.auth().currentUser.getIdToken()
  		.then(
  			(token: string) => this.token = token
		);
	return this.token;
  }

  isAuthenticated(){
  	return this.token != null;
  }

  logout(){
  	firebase.auth().signOut();
  	this.token = null;
  	this.router.navigate(['/recipes']);
  }

}
