import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseTicketFormComponent } from './purchase-ticket-form.component';

describe('PurchaseTicketFormComponent', () => {
  let component: PurchaseTicketFormComponent;
  let fixture: ComponentFixture<PurchaseTicketFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseTicketFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseTicketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
