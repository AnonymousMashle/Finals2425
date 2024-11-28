import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports:[FormsModule, CommonModule],
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css'],
})
export class ServiceDetailsComponent {
  serviceDetails = {
    id: 0,
    name: '',
    description: '',
    category: '',
    cost: 0,
  };

  saveService() {
    if (
      this.serviceDetails.id &&
      this.serviceDetails.name &&
      this.serviceDetails.description &&
      this.serviceDetails.category &&
      this.serviceDetails.cost
    ) {
      alert('Service details saved successfully!');
      console.log(this.serviceDetails);
    } else {
      alert('Please fill in all fields.');
    }
  }

  cancelOperation() {
    if (confirm('Are you sure you want to cancel? Unsaved changes will be lost.')) {
      this.serviceDetails = {
        id: 0,
        name: '',
        description: '',
        category: '',
        cost: 0,
      };
    }
  }
}
