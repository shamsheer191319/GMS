import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsystemComponent } from './paymentsystem.component';

describe('PaymentsystemComponent', () => {
  let component: PaymentsystemComponent;
  let fixture: ComponentFixture<PaymentsystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
