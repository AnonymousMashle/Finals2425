import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { ServiceDetailsComponent } from "./service-details/service-details.component";
import { ServiceListComponent } from './service-list/service-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,
    ReactiveFormsModule,
    CommonModule,
    ServiceListComponent,
    ServiceDetailsComponent,
    HeaderComponent,
    FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Routing-Example';
}


