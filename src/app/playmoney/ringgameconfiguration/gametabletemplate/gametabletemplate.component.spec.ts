import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GametabletemplateComponent } from './gametabletemplate.component';

describe('GametabletemplateComponent', () => {
  let component: GametabletemplateComponent;
  let fixture: ComponentFixture<GametabletemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GametabletemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GametabletemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
