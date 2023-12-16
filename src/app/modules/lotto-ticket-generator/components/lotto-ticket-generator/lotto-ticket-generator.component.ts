import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { LottoTicketBoxModel } from '../../models/lotto-ticket-box.model';
import { LottoTicketModel } from '../../models/lotto-ticket.model';
import { LottoTicketInterface } from '../../models/lotto-ticket.interface';
import { LottoTicketService } from '../../services/lotto-ticket.service';
import { BackendLottoTicketInterface } from '../../models/models-for-backend/backend-lotto-ticket.interface';
import { BackendLottoTicketModel } from '../../models/models-for-backend/backend-lotto-ticket.model';
import { BackendLottoTicketBoxInterface } from '../../models/models-for-backend/backend-lotto-ticket-box.interface';
import { BackendLottoTicketBoxModel } from '../../models/models-for-backend/backend-lotto-ticket-box.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lotto-ticket-generator',
  templateUrl: './lotto-ticket-generator.component.html',
  styleUrls: ['./lotto-ticket-generator.component.css']
})
export class LottoTicketGeneratorComponent implements OnInit, OnDestroy {
  public ticketGenerationForm!: FormGroup;
  public readonly numberOfBoxesMinValue: number = 1;
  public readonly numberOfBoxesMaxValue: number = 50;

  public ticket: LottoTicketInterface | null = null;
  public boxes: LottoTicketBoxModel[] = [];

  public isGenerated: boolean = false;

  private addLottoTicketSubscription: Subscription | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private lottoTicketService: LottoTicketService
    ) { }
  
  ngOnInit(): void {
    this.defaultFormValues();
  }

  ngOnDestroy(): void {
    if (this.addLottoTicketSubscription) {
      this.addLottoTicketSubscription.unsubscribe();
    }
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
    } else {
      console.error('withSuperzahl is null or undefined');
    }
  }

  public generateAnotherTicket(): void {
    this.isGenerated = false;

    this.defaultFormValues();
  }

  public saveTicket(): void {
    const ticket = this.ticket;

    if (ticket) {
      const boxesToAdd: BackendLottoTicketBoxInterface[] = [];

      this.boxes.forEach(b => {
        const boxToAdd: BackendLottoTicketBoxInterface = new BackendLottoTicketBoxModel(
          0,
          new Date(),
          b.getRows(),
          b.getCols(),
          b.getValuesCopy(),
          b.getSelectedValuesCopy(),
          b.getSelectedValuesSortedCopy());
        
        boxesToAdd.push(boxToAdd);
      });

      const ticketToAdd: BackendLottoTicketInterface = new BackendLottoTicketModel(boxesToAdd);

      if (ticket.getSuperzahl() !== null || ticket.getSuperzahl() !== undefined) {
        ticketToAdd.superzahl = ticket.getSuperzahl();
      }

      this.addLottoTicketSubscription = this.lottoTicketService.addLottoTicket(ticketToAdd).subscribe({
        next: (v) => {
          // Here we'd do proper success notification
          console.log('Ticket Created Successfully', v);

          this.generateAnotherTicket();
        },
        error: (e) => {
          // Here we'd do proper error handling
          console.error(e);
        },
        complete: () => { }
      });
    }
  }

  private defaultFormValues() {
    this.ticketGenerationForm = this.formBuilder.group({
      numberOfBoxes: [1, [Validators.required, this.validateNumberOfBoxes.bind(this)]],
      withSuperzahl: [false]
    });
  }
}
