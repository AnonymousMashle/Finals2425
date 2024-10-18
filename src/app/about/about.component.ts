import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { BodyComponent } from '../body/body.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { UserAccountsComponent } from '../user-accounts/user-accounts.component';
import { LayoutComponent } from '../layout/layout.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HomeComponent,
    BodyComponent,
    NavbarComponent,
    UserAccountsComponent,
    LayoutComponent,
    FooterComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
