import { TestBed } from '@angular/core/testing';

import { LottoTicketService } from './lotto-ticket.service';

describe('LottoTicketService', () => {
  let service: LottoTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LottoTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
