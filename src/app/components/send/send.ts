import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-send',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './send.html',
  styleUrl: './send.scss'
})
export class SendComponent {
  requirePinEntry = false;
  transactionPin = '';
  sendData = { type: 'bank', myAccount: '', myPhone: '', recipient: '', amount: null };

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