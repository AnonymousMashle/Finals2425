import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user = {
    email: '',
    password: ''
  };
  confirmPassword = '';
  isSubmitted = false;

  get passwordMismatch() {
    return this.user.password !== this.confirmPassword;
  }

  onSubmit() {
    if (!this.passwordMismatch) {
      this.isSubmitted = true;
      console.log('User Data:', this.user);
    }
  }
}
