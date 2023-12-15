import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-lotto-ticket-generator',
  templateUrl: './lotto-ticket-generator.component.html',
  styleUrls: ['./lotto-ticket-generator.component.css']
})
export class LottoTicketGeneratorComponent implements OnInit {
  public ticketGenerationForm!: FormGroup;
  public readonly numberOfBoxesMinValue: number = 1;
  public readonly numberOfBoxesMaxValue: number = 50;

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.ticketGenerationForm = this.formBuilder.group({
      numberOfBoxes: [1, [Validators.required, this.validateNumberOfBoxes.bind(this)]],
      withSuperzahl: [false]
    });
  }

  validateNumberOfBoxes(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (value === null || value === undefined || value === '') {
      return { required: true };
    }

    if (value < this.numberOfBoxesMinValue || value > this.numberOfBoxesMaxValue) {
      return { invalidRange: true };
    }

    return null;
  }

  public generateTicket(): void {

  }
}
