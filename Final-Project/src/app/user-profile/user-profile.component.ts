import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports:[CommonModule, RouterModule, FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  isEditing = false;

  user = {
    name: '',
    email: '',
    courses: ['']
  };

  editUser = {
    name: this.user.name,
    email: this.user.email,
    courses: this.user.courses.join(', ')
  };

  toggleEditMode() {
    this.isEditing = true;
  }

  saveProfile() {
    this.user.name = this.editUser.name;
    this.user.email = this.editUser.email;
    this.user.courses = this.editUser.courses.split(',').map(course => course.trim());
    this.isEditing = false;
  }
}
