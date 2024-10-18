import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { AboutComponent } from '../about/about.component';
import { BodyComponent } from '../body/body.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { LayoutComponent } from '../layout/layout.component';
import { UserAccountsComponent } from '../user-accounts/user-accounts.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavbarComponent,AboutComponent,
    BodyComponent,
    FooterComponent,ContactsComponent,
    LayoutComponent,
    UserAccountsComponent,
    
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
