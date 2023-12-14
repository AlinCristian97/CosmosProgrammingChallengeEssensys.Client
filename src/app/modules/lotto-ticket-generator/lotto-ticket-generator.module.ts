import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottoTicketGeneratorComponent } from './components/lotto-ticket-generator/lotto-ticket-generator.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    LottoTicketGeneratorComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class LottoTicketGeneratorModule { }
