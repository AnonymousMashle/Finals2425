import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { AboutComponent } from '../about/about.component';
import { BodyComponent } from '../body/body.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { LayoutComponent } from '../layout/layout.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { UserAccountsComponent } from '../user-accounts/user-accounts.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    AboutComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    LayoutComponent,
    NavbarComponent,
    UserAccountsComponent
    ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

}
