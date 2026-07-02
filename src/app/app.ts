import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { BalanceComponent } from "./components/balance/balance";
import { PaymentsComponent } from "./components/payments/payments";
import { Home } from "./components/home/home";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BalanceComponent, PaymentsComponent, Home],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'MUNYEKS_AGENCY_APP';
}