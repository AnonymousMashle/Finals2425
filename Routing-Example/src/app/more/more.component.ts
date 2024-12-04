import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceListComponent } from '../service-list/service-list.component';

@Component({
  selector: 'app-more',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './more.component.html',
  styleUrl: './more.component.css'
})
export class MoreComponent {

}
