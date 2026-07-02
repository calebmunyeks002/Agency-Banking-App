import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AuthComponent } from './components/auth/auth';
import { SendComponent } from './components/send/send';
import { PaymentsComponent } from './components/payments/payments';
import { BalanceComponent } from './components/balance/balance';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'auth', component: AuthComponent },
  { path: 'send', component: SendComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'balance', component: BalanceComponent },
  { path: '**', redirectTo: '' } // Fallback to home if page not found
];