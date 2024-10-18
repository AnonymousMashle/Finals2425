import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from '../body/body.component';
import { FooterComponent } from '../footer/footer.component';
import { LayoutComponent } from '../layout/layout.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { UserAccountsComponent } from '../user-accounts/user-accounts.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet,
    BodyComponent,
    FooterComponent,
    LayoutComponent,
    NavbarComponent,
    UserAccountsComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
