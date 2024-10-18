import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from '../body/body.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { LayoutComponent } from '../layout/layout.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-user-accounts',
  standalone: true,
  imports: [
    RouterOutlet,
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    NavbarComponent,
  ],
  templateUrl: './user-accounts.component.html',
  styleUrl: './user-accounts.component.css'
})
export class UserAccountsComponent {

}
