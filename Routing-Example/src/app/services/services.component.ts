import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    { id: 1, name: 'Web Development', description: 'Building websites' },
    { id: 2, name: 'SEO Optimization', description: 'Optimizing websites for search engines' },
    { id: 3, name: 'App Development', description: 'Mobile application development' },
  ];

  constructor(private router: Router) {}

  viewService(id: number) {
    this.router.navigate(['/services', id]);
  }

  editService(id: number) {
    // Handle editing logic (this can be navigated to another route for editing)
    console.log(`Editing service with ID: ${id}`);
  }

  deleteService(id: number) {
    // Handle delete logic (confirm before deleting)
    this.services = this.services.filter(service => service.id !== id);
    console.log(`Deleted service with ID: ${id}`);
  }
}
