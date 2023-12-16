import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LottoTicketGeneratorComponent } from './modules/lotto-ticket-generator/components/lotto-ticket-generator/lotto-ticket-generator.component';
import { HomeComponent } from './components/home/home.component';
import { LottoTicketsComponent } from './modules/lotto-ticket-generator/components/lotto-tickets/lotto-tickets.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'lotto-ticket-generator', component: LottoTicketGeneratorComponent },
  { path: 'lotto-tickets', component: LottoTicketsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
