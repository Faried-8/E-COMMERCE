import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email, Validators.minLength(10)]),
    password: new FormControl(null, [Validators.required])  
  });
  isSubmitted = false;

  get userData() { return this.loginForm.controls; } 
  errorMsg: string | null = null;  
  constructor(private auth: AuthService, private router: Router, private global: GlobalService) {}

  handleSubmit() {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(res => {
        console.log(res)
        if (res.status === 'Success') {
          console.log('Login successful');
          localStorage.setItem('userToken', res.data.token);
          localStorage.setItem('userName', `${res.data.first_name} ${res.data.last_name}`);
          localStorage.setItem('userPassword', `${res.data.password}`);
          this.global.is_login = true;
          this.router.navigateByUrl('/');
        }
      },(err)=>{
        this.errorMsg = 'Email Or Passord Wrong'
      })
    }
  }
}
