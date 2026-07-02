import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-send',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './send.html',
  styleUrl: './send.scss'
})
export class SendComponent {
  requirePinEntry = false;
  transactionPin = '';

  sendData = {
    type: 'bank',
    myAccount: '',
    myPhone: '',
    recipient: '',
    amount: null as number | null
  };

  requestPinConfirmation() {
    this.requirePinEntry = true;
  }

  executeTransaction() {
    if (this.transactionPin.length === 4) {
      alert('Transaction processed successfully!');
      this.requirePinEntry = false;
    }
  }
}