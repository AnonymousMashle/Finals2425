import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from '../body/body.component';
import { HeaderComponent } from '../header/header.component';
import { LayoutComponent } from '../layout/layout.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { UserAccountsComponent } from '../user-accounts/user-accounts.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterOutlet,
    BodyComponent,
    HeaderComponent,
    LayoutComponent,
    NavbarComponent,
    UserAccountsComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
