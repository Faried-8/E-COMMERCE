import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-sign-log',
  templateUrl: './navbar-sign-log.component.html',
  styleUrl: './navbar-sign-log.component.css'
})
export class NavbarSignLogComponent {

  
  isSidebarVisible: boolean = false; 
  isClicked: boolean = true;
  isSubmitted : boolean = true;
  menuItems: any[] = [];

  constructor() {}

  ngOnInit(): void {
    // Define menu items
    this.menuItems = [
      { title: 'Manage My Account', icon: 'https://img.icons8.com/ios-filled/50/guest-male--v1.png' },
      { title: 'My Order', icon: 'https://img.icons8.com/glyph-neue/64/purchase-order.png' },
      { title: 'My Cancellations', icon: 'https://img.icons8.com/ios-filled/50/cancel.png' },
      { title: 'My Reviews', icon: 'https://img.icons8.com/ios-filled/50/star--v1.png' },
      { title: 'Logout', icon: 'https://img.icons8.com/ios-filled/50/exit.png' },
    ];
  }

  // Method to toggle sidebar visibility
  toggleSidebar(): void {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
