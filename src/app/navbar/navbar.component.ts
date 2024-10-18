import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from '../body/body.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { UserAccountsComponent } from '../user-accounts/user-accounts.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterOutlet,
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    UserAccountsComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
