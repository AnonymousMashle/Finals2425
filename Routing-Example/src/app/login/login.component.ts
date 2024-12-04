import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    username: '',
    password: ''
  };

  isLoggedIn = false;

  onSubmit() {
    // Simple mock login logic (Replace with actual authentication logic)
    if (this.loginData.username === 'testuser' && this.loginData.password === 'password123') {
      this.isLoggedIn = true;
    } else {
      alert('Invalid username or password');
    }
  }
}
