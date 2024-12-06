import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-services',
  standalone: true,
  imports:[FormsModule,CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {

  services = [
    { id: 1, name: 'Haircut', description: 'Low-Fade', price: 150.00 },
    { id: 2, name: 'Color', description: 'kulay', price: 200.00 },
    { id: 3, name: 'Hairband', description: 'cool effects', price: 35.00 },
    { id: 4, name: 'Rubix Cube', description:'cube', price: 120.00},
    { id: 5, name: 'Soccer Ball', description:'ball', price: 400.00},
  ];  


  newService = { id: 0, name: '', description: '', price: 0};


  addService() {
    if (this.newService.id && this.newService.name && this.newService.description && this.newService.price) {
      this.services.push({ ...this.newService });
      this.newService = { id: 0, name: '', description: '', price: 0};
    } else {
      alert('fill in all fields first.');
    }
  }



  viewServiceDetails(id: number) {
    alert(`Viewing details of Service ID: ${id}`);
  }

  editServiceDetails(id: number) {
    alert(`Editing Service ID: ${id}`);
  }
  deleteServiceDetails(id: number) {
    this.services = this.services.filter(service => service.id !== id);
    alert(`Deleted Service ID: ${id}`);
  }

}
