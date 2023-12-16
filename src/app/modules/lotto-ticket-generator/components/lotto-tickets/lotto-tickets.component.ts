import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { LottoTicketService } from '../../services/lotto-ticket.service';
import { Subscription } from 'rxjs';
import { BackendLottoTicketInterface } from '../../models/models-for-backend/backend-lotto-ticket.interface';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-lotto-tickets',
  templateUrl: './lotto-tickets.component.html',
  styleUrls: ['./lotto-tickets.component.css']
})
export class LottoTicketsComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  
  public lottoTickets: BackendLottoTicketInterface[] = [];

  public pageIndex: number = 0;
  public pageSize: number = 5;
  public length: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private lottoTicketService: LottoTicketService
  ) { }


  ngOnInit(): void {
    this.getInitialTickets();
    this.getTicketsCount();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private getTicketsCount() {
    const subscription = this.lottoTicketService.getLottoTicketsCount().subscribe({
      next: (v) => {
        // Here we'd do proper success notification
        this.length = v;
      },
      error: (e) => {
        // Here we'd do proper error handling
        console.error(e);
      },
      complete: () => { }
    });

    this.subscriptions.push(subscription);
  }

  private getInitialTickets() {
    this.subscribeToPagedLottoTickets(this.pageIndex, this.pageSize);
  }

  public getServerData(event?:PageEvent){
    if (event) {
      this.subscribeToPagedLottoTickets(event.pageIndex, event.pageSize);
    }
  }

  private subscribeToPagedLottoTickets(pageIndex: number, pageSize: number): void {
    const subscription = this.lottoTicketService.getPagedLottoTickets(pageIndex, pageSize).subscribe({
      next: (v) => {
        // Here we'd do proper success notification
        this.lottoTickets = v;
      },
      error: (e) => {
        // Here we'd do proper error handling
        console.error(e);
      },
      complete: () => { }
    });
  
    this.subscriptions.push(subscription);
  }
}
