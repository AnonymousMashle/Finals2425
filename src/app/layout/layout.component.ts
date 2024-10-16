import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";
import { FooterComponent } from "../footer/footer.component";
import { UserAccountsComponent } from "../user-accounts/user-accounts.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavbarComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    UserAccountsComponent],
    
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
