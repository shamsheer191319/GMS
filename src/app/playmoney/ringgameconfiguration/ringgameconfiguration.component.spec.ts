import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RinggameconfigurationComponent } from './ringgameconfiguration.component';

describe('RinggameconfigurationComponent', () => {
  let component: RinggameconfigurationComponent;
  let fixture: ComponentFixture<RinggameconfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RinggameconfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RinggameconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
