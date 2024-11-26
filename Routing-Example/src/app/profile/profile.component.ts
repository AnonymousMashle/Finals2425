import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user = {
    username: '',
    address: '',
    phone: ''
  };
  isSubmitted = false;

  onSubmit() {
    this.isSubmitted = true;
    console.log('Profile Data:', this.user);
  }
}
