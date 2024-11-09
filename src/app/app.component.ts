import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activeComponent: string = 'home'; // Default component to show

  constructor(private router: Router) {
    // Subscribe to router events to change the active component based on the route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Extract the fragment from the route URL to switch between components
        const route = event.urlAfterRedirects.split('/')[1];
        this.activeComponent = route || 'home'; // Default to 'home' if no fragment
      }
    });
  }

  // Function for smooth scroll after navigation
  smoothScroll(target: string) {
    // First, navigate to the route
    this.router.navigate([`/${target}`]).then(() => {
      // After routing is complete, scroll to the target section
      setTimeout(() => {
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100); // Optional timeout to wait for the route change
    });
  }
}
