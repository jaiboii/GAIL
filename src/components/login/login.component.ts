import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [FormsModule],
})
export class LoginComponent {
  email = signal('gail2025@gmail.com');
  password = signal('1234');
  errorMessage = signal('');
  
  private authService = inject(AuthService);

  login(): void {
    if (this.email() === 'gail2025@gmail.com' && this.password() === '1234') {
      this.errorMessage.set('');
      this.authService.login(true);
    } else {
      this.errorMessage.set('Invalid email or password.');
      this.authService.login(false);
    }
  }
}
