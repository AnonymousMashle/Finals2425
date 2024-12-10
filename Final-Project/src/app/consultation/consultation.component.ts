import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-consultation',
  standalone: true,
  imports:[CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent {
  consultationSlots = [
    { date: 'December 12, 2024', time: '10:00 AM - 11:00 AM' },
    { date: 'December 13, 2024', time: '2:00 PM - 3:00 PM' },
    { date: 'December 14, 2024', time: '9:00 AM - 10:00 AM' },
  ];

  appointmentMessage: string | null = null;

  setAppointment(index: number): void {
    const selectedSlot = this.consultationSlots[index];
    this.appointmentMessage = `Your appointment is set for ${selectedSlot.date} at ${selectedSlot.time}.`;
  }
}
