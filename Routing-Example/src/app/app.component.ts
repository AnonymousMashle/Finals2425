import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { ServiceDetailsComponent } from "./service-details/service-details.component";
import { ServiceListComponent } from './service-list/service-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BranchesComponent } from './branches/branches.component';
import { Service } from './service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,
    ReactiveFormsModule,
    CommonModule,
    ServiceListComponent,
    ServiceDetailsComponent,
    HeaderComponent,
    FooterComponent,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Routing-Example';
}




/*service.ts*/
export class Services{
  services: Service[] = [
    {id:1, name: 'Haircut', description:'Gcut', price: 150.00},
    {id:2, name: 'Hair Color', description:'kulay', price: 200.00},
    {id:3, name: 'Hairband', description:'banc', price: 35.00},
    {id:4, name: 'Rubix Cube', description:'cube', price: 120.00},
    {id:5, name: 'Soccer Ball', description:'ball', price: 400.00},
  ];
  selectedService: Service | null = null; /*This will make the items in the */

  viewServiceDetails(service: Service): any{
    this.selectedService = service;
    }


  }
