import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LottoTicketGeneratorModule } from './modules/lotto-ticket-generator/lotto-ticket-generator.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottoTicketGeneratorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
