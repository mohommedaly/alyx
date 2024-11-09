import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Output() navigate = new EventEmitter<string>(); // Custom event emitter

  constructor(private router: Router) {}

  // This method will emit the target component for navigation and scroll
  smoothScroll(target: string) {
    this.router.navigate([`/${target}`]).then(() => {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }
}
