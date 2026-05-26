import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isSidebarVisible: boolean = false; 
  isClicked: boolean = true;
  isSubmitted : boolean = true;
  menuItems: any[] = [];

  constructor(private router:Router) {}

  ngOnInit(): void {
    // Define menu items
  }

  // Method to toggle sidebar visibility
  toggleSidebar(): void {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  // Handle menu item clicks
  handleMenuItemClick(action: string): void {
    if (action === 'logout') {
      this.logout();
    }
  }

  // Logout method to clear session and navigate to the signup page
  logout(): void {
    // Remove 'signup' data from localStorage or sessionStorage
    localStorage.removeItem('signup'); // If signup data is stored in localStorage
    sessionStorage.removeItem('signup'); // If signup data is stored in sessionStorage
  
    // Optional: Clear all localStorage/sessionStorage data
    // localStorage.clear();
    // sessionStorage.clear();
  
    // Perform any additional logout operations if needed (e.g., clearing auth tokens)
    // Example: localStorage.removeItem('authToken');
  
    // Navigate to the signup page after logout
    this.router.navigate(['/signup']);
  }
  
}
