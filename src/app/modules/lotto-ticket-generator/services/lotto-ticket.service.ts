import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BackendLottoTicketInterface } from '../models/models-for-backend/backend-lotto-ticket.interface';

@Injectable({
  providedIn: 'root'
})
export class LottoTicketService {
  private apiUrl = 'https://localhost:7285/api';

  constructor(private http: HttpClient) { }

  getAllLottoTickets(): Observable<BackendLottoTicketInterface[]> {
    return this.http.get<BackendLottoTicketInterface[]>(this.apiUrl + '/LottoTicket/GetAllLottoTickets');
  }

  addLottoTicket(lottoTicket: BackendLottoTicketInterface): Observable<BackendLottoTicketInterface> {
    return this.http.post<BackendLottoTicketInterface>(this.apiUrl + '/LottoTicket/AddLottoTicket', lottoTicket);
  }
}
