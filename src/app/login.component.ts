import { Component, OnInit } from '@angular/core';
import { AngularService } from '../angular/service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styles:[`
    .alert{
      color:red;
    }
  `]
})
export class LoginComponent {
  loginForm: FormGroup;
  loggedIn: string = null;
  constructor(
    private _service: AngularService,
    private _builder: FormBuilder,
    private _loginService: LoginService
  ) {
    this.loginForm = this._builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loggedIn = localStorage.getItem('currentUser');
    this._service.setDirective(1);
  }
  save() {
    this._loginService.login(this.loginForm.value.username, this.loginForm.value.password);
  }
}
