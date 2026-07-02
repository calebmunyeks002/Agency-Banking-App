import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-balance',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './balance.html',
  styleUrl: './balance.scss'
})
export class BalanceComponent {
  balanceShown = false;
  inquiry = { accountNo: '', phone: '', pin: '' };

  checkBalance() {
    if(this.inquiry.pin.length === 4) {
      this.balanceShown = true;
    }
  }
}