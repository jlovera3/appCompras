import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PresupuestosService } from '../../servicios/presupuestos.service';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registroForm: FormGroup;
  userdata: any;

  constructor(
    private formBuilder: FormBuilder,
    private autService: AutenticacionService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

  erroresForm = {
    'email': '',
    'password': ''
  }

  mensajesValidacion = {
    'email':{
       'required' :'Email obligatorio',
       'email': 'Introduzca un email Correcto'
    },
    'password': {
       'required':      'Contraseña obligatoria',
       'minlength':     'La contraseña debe tener más de 6 caracteres'
     }  
  }

  ngOnInit() { 
    this.registroForm = this.formBuilder.group({ 
      'email': ['', [Validators.required, Validators.email]], 
      'password': ['', [Validators.required, Validators.minLength(6)]] }); 
    this.registroForm.valueChanges.subscribe(data => this.onValueChanged(data)); 
    this.onValueChanged(); 
  } 
  
  onSubmit() {
    this.userdata = this.saveUserdata();
    this.autService.registroUsuario(this.userdata);
    this.router.navigate(['/inicio'])
  }

  saveUserdata() {
      const saveUserdata = {email: this.registroForm.get('email').value,
      password: this.registroForm.get('password').value,
    };
    return saveUserdata;
  }
  onValueChanged(data?: any) {
    if (!this.registroForm) { 
      return; 
    }
    const form = this.registroForm;
    for (const field in this.erroresForm) {
      this.erroresForm[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.mensajesValidacion[field];
        for (const key in control.errors) {
          this.erroresForm[field] += messages[key] + ' ';
        }
      }
    }
  }
}
