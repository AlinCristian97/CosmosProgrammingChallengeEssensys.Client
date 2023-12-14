import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoTicketGeneratorComponent } from './lotto-ticket-generator.component';

describe('LottoTicketGeneratorComponent', () => {
  let component: LottoTicketGeneratorComponent;
  let fixture: ComponentFixture<LottoTicketGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LottoTicketGeneratorComponent]
    });
    fixture = TestBed.createComponent(LottoTicketGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
