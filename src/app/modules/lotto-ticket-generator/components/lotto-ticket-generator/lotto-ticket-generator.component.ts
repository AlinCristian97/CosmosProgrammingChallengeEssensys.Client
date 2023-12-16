import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { LottoTicketBoxModel } from '../../models/lotto-ticket-box.model';

@Component({
  selector: 'app-lotto-ticket-generator',
  templateUrl: './lotto-ticket-generator.component.html',
  styleUrls: ['./lotto-ticket-generator.component.css']
})
export class LottoTicketGeneratorComponent implements OnInit {
  public ticketGenerationForm!: FormGroup;
  public readonly numberOfBoxesMinValue: number = 1;
  public readonly numberOfBoxesMaxValue: number = 50;
  
  values: number[] = Array.from({ length: 49 }, (_, index) => index + 1);

  public boxes: LottoTicketBoxModel[] = [];

  getRows(): LottoTicketBoxModel[][] {
    const rows: LottoTicketBoxModel[][] = [];

    for (let i = 0; i < this.boxes.length; i += 6) {
      rows.push(this.boxes.slice(i, i + 6));
    }
     
    return rows;
  }

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
  }

  public generateAnotherTicket(): void {
    this.isGenerated = false;
  }

  public saveTicket(): void {
    console.log('saving ticket!');
  }
}
