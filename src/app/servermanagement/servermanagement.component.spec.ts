import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServermanagementComponent } from './servermanagement.component';

describe('ServermanagementComponent', () => {
  let component: ServermanagementComponent;
  let fixture: ComponentFixture<ServermanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServermanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServermanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
