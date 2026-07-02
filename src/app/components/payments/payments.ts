import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule], // <-- Ensure NgModel is removed here
  templateUrl: './payments.html',
  styleUrl: './payments.scss'
})
export class PaymentsComponent {
  requirePinEntry = false;
  pin = '';
  paymentData = { accountNo: '', method: 'paybill', reason: '', amount: null };

  completePayment() {
    if(this.pin.length === 4) {
      alert(`Payment for ${this.paymentData.reason} complete.`);
      this.requirePinEntry = false;
    }
  }
}