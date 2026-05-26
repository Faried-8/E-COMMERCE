import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

  // constructor(private auth: AuthService, private router: Router, private global: GlobalService) {
  //   this.auth.login(this.loginForm.value).subscribe(
  //     (res: any) => {
  //        localStorage.setItem('userName',`${res.data.first_name} ${res.data.last_name}`);     
  //     }
  handleClick(){
    
  }
}