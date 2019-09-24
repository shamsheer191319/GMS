import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealmoneyComponent } from './realmoney.component';

describe('RealmoneyComponent', () => {
  let component: RealmoneyComponent;
  let fixture: ComponentFixture<RealmoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealmoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealmoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
