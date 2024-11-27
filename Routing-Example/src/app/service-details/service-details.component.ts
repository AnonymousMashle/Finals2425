import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-service-details',
  standalone: true,
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css'],
  imports: [CommonModule, FormsModule]  // Import FormsModule for ngModel support
})
export class ServiceDetailsComponent implements OnInit {
  service = { id: 0, name: '', description: '', category: '', price: 0 };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const serviceId = +this.route.snapshot.paramMap.get('id')!;
    this.getServiceDetails(serviceId);
  }

  getServiceDetails(id: number): void {
    const services = [
      { id: 1, name: 'Web Development', description: 'Building websites', category: 'Development', price: 500 },
      { id: 2, name: 'SEO Optimization', description: 'Optimizing websites for search engines', category: 'Marketing', price: 200 },
      { id: 3, name: 'App Development', description: 'Mobile application development', category: 'Development', price: 800 },
    ];

    this.service = services.find(service => service.id === id)!;
  }

  saveService(): void {
    console.log('Saving service', this.service);
    this.router.navigate([{ outlets: { serviceDetails: null } }]);
  }

  cancel(): void {
    this.router.navigate([{ outlets: { serviceDetails: null } }]);
  }
}
