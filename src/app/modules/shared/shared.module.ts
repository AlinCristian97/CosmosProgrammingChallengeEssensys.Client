import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FlexLayoutModule,

    // Angular Material Modules
    MatToolbarModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }
