import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeanceBuyTicketComponent } from './seance-buy-ticket.component';

describe('SeanceBuyTicketComponent', () => {
  let component: SeanceBuyTicketComponent;
  let fixture: ComponentFixture<SeanceBuyTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeanceBuyTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeanceBuyTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
