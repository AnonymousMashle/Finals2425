import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink,
    RouterModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
