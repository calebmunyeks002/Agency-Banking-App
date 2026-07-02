import { Component, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Combined for cleanliness
import { AuthService } from '../../services/auth';


@Component({
  selector: 'app-auth',
  standalone: true, // <-- ADDED THIS LINE
  imports: [FormsModule, ReactiveFormsModule, CommonModule, AuthService], // <-- ADDED AuthService to imports
  templateUrl: './auth.html',
  styleUrl: './auth.scss'
})
export class AuthComponent {
  mode: 'login' | 'register' = 'login';
  step: 'inputs' | 'otp' = 'inputs';
  otpCode = '';
  
  authData = { phone: '', accountNo: '', bankName: '', password: '' };


  constructor(private authService: AuthService) {}
  
  submitInitialFields() {
    // Perform field payload validations here
    this.step = 'otp'; // Advance UI to verification screen
  }

  verifyOtpCode() {
    if (this.otpCode.length > 0) {
      this.authService.setLoggedIn(true); // Automatically forwards to their cached quick action page!
    }
  }
}
