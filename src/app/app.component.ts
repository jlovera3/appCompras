import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'appCompras';
  
  ngOnInit () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAyRIC7ts4-YJZIIqKF-H4QJu889YR-HWE',
      authDomain: 'comprasapp-25757.firebaseapp.com'
    });
  }
}
