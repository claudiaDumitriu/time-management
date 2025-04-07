import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  constructor(private router: Router) {}

  registerPage() {
    this.router.navigate(['/register']);
  }

  loginPage() {
    this.router.navigate(['/login']);
  }
}
