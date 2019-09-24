import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaymoneyComponent } from './playmoney.component';

describe('PlaymoneyComponent', () => {
  let component: PlaymoneyComponent;
  let fixture: ComponentFixture<PlaymoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaymoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaymoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
