import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private router: Router,
    private activatedRouter: ActivatedRoute) { }

  registroUsuario(userdata): Promise<any> {
    return firebase.auth().createUserWithEmailAndPassword(userdata.email, userdata.password);
  }

  inicioSesion(userdata): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(userdata.email, userdata.password);
  }

  isAuthenticated() {
    const user = firebase.auth().currentUser;
    if (user) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    firebase.auth().signOut();
  }




}
