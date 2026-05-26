import { Component, OnInit } from '@angular/core';
import { Register } from '../../interfaces/register';
import { NgForm } from '@angular/forms';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  flag = true;  
  model: Register = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    confirm_password: ''
  }

  constructor(private router: Router ,  private register: AuthService) { 
    // Subscribe to router events to show and hide the loading indicator
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // Show the loading indicator when navigation starts
        this.flag = true;
      }

      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        // Hide the loading indicator when navigation ends, is canceled, or fails
        this.flag = false;
      }
    });
  }
  // navbar
  isSidebarVisible: boolean = false; 
  isClicked: boolean = true;
  isSubmitted : boolean = true;
  menuItems: any[] = [];


  

  // Method to toggle sidebar visibility
  toggleSidebar(): void {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
  ngOnInit(): void {
    this.menuItems = [
      { title: 'Manage My Account', icon: 'https://img.icons8.com/ios-filled/50/guest-male--v1.png' },
      { title: 'My Order', icon: 'https://img.icons8.com/glyph-neue/64/purchase-order.png' },
      { title: 'My Cancellations', icon: 'https://img.icons8.com/ios-filled/50/cancel.png' },
      { title: 'My Reviews', icon: 'https://img.icons8.com/ios-filled/50/star--v1.png' },
      { title: 'Logout', icon: 'https://img.icons8.com/ios-filled/50/exit.png' },
    ];
   }

  handleSubmit(registerForm: NgForm) {
    if (registerForm.valid && this.model.password === this.model.confirm_password) {            
      this.register.Register(this.model).subscribe(res =>{
        console.log(res);
        console.log('Login successful');
        if (res.status === 'Success') {
          localStorage.setItem('FirstName', `${res.data.first_name} ${res.data.last_name}`);
          localStorage.setItem('LastName', `${res.data.last_name}`);
          localStorage.setItem('Email', `${res.data.Email}`);
          localStorage.setItem('PhoneNumber', `${res.data.PhoneNumber}`);
          localStorage.setItem('password', `${res.data.password}`);
          localStorage.setItem('confirmPassword', `${res.data.confirmPassword}`);
        }
        this.flag = true;  
        this.router.navigate(['']).then(() => {
          this.flag = false; 
        });
      },(error)=>{
        console.log("Error");  
      }) 
    }
  }


}
