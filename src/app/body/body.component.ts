import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { LayoutComponent } from '../layout/layout.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { UserAccountsComponent } from '../user-accounts/user-accounts.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    NavbarComponent,
    UserAccountsComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
