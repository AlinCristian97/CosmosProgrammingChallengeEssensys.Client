import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { LottoTicketBoxModel } from '../../models/lotto-ticket-box.model';
import { LottoTicketModel } from '../../models/lotto-ticket.model';
import { LottoTicketInterface } from '../../models/lotto-ticket.interface';

@Component({
  selector: 'app-lotto-ticket-generator',
  templateUrl: './lotto-ticket-generator.component.html',
  styleUrls: ['./lotto-ticket-generator.component.css']
})
export class LottoTicketGeneratorComponent implements OnInit {
  public ticketGenerationForm!: FormGroup;
  public readonly numberOfBoxesMinValue: number = 1;
  public readonly numberOfBoxesMaxValue: number = 50;

  public ticket: LottoTicketInterface | null = null;
  public boxes: LottoTicketBoxModel[] = [];

  public isGenerated: boolean = false;

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
    this.isGenerated = true;
    this.boxes = [];

    const numberOfBoxesInput: number = this.ticketGenerationForm.get('numberOfBoxes')?.value;
    if (numberOfBoxesInput && numberOfBoxesInput !== 0) {
      for (let i: number = 0; i < numberOfBoxesInput; i++) {
        const boxToAdd: LottoTicketBoxModel = new LottoTicketBoxModel();
        this.boxes.push(boxToAdd);
      }
    }

    const withSuperzahlInput: boolean = this.ticketGenerationForm.get('withSuperzahl')?.value;
    if (withSuperzahlInput !== undefined && withSuperzahlInput !== null) {
      if (withSuperzahlInput === true) {
        const superzahl: number = Math.floor(Math.random() * 10);
        this.ticket = new LottoTicketModel(superzahl, this.boxes);
      } else {
        this.ticket = new LottoTicketModel(null, this.boxes);
      }

      console.log('generateTicket', 'this.ticket', this.ticket)
    } else {
      console.error('withSuperzahl is null or undefined');
    }
  }

  public generateAnotherTicket(): void {
    this.isGenerated = false;
  }

  public saveTicket(): void {
    console.log('saving ticket!', 'this.ticket', this.ticket);
  }
}
