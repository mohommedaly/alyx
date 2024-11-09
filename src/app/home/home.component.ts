import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
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
