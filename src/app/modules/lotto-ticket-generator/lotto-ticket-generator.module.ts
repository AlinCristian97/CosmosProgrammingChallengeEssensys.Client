import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottoTicketGeneratorComponent } from './components/lotto-ticket-generator/lotto-ticket-generator.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    LottoTicketGeneratorComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    // Angular Material imports
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule
  ]
})
export class LottoTicketGeneratorModule { }
