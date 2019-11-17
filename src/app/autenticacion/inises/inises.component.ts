import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-inises',
  templateUrl: './inises.component.html',
  styleUrls: ['./inises.component.css']
})
export class InisesComponent implements OnInit {


  loginForm: FormGroup;
  userdata: any;
  inicioerror: boolean = false;
  emailerror: boolean = false;
  logueando: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private autService: AutenticacionService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': ['', [
        Validators.required,
        Validators.email
      ]
      ],
      'password': ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6)
      ]
      ]
    });
  }

  onSubmit() {
    this.logueando = true;
    this.userdata = this.saveUserdata();
    this.autService.inicioSesion(this.userdata).then(response => {
      console.log(response);
      this.router.navigate(['/inicio']);
    })
      .catch(error => {
        this.logueando = false;
        console.log(error);
        if (error.code === "auth/invalid-email") {
          this.inicioerror = false;
          this.emailerror = true;
        } else if (error.code === "user-not-found" || error.code === "wrong-password") {
          this.emailerror = false;
          this.inicioerror = true;
        }

      })

  }

  saveUserdata() {
    const saveUserdata = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value,
    };
    return saveUserdata;
  }

  isAuth() {
    return this.autService.isAuthenticated();
  }

}