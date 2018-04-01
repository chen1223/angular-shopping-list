import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  onNavigate(feature: string){
  	this.loadedFeature = feature;
  }

  ngOnInit(){
  	firebase.initializeApp({
  		apiKey: "AIzaSyA6q9nSuReMADGREUjioTgl_kxFOO4rOv8",
    	authDomain: "udemy-recipe-7877c.firebaseapp.com"
  	});
  }
}
