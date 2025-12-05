import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = signal<boolean>(false);

  constructor(private router: Router) {
    // Check for saved login state, e.g., from sessionStorage
    const loggedIn = sessionStorage.getItem('isLoggedIn');
    if (loggedIn === 'true') {
      this.isLoggedIn.set(true);
    }
  }

  login(success: boolean): void {
    if (success) {
      this.isLoggedIn.set(true);
      sessionStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/app/dashboard']);
    } else {
        this.isLoggedIn.set(false);
    }
  }

  logout(): void {
    this.isLoggedIn.set(false);
    sessionStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}
