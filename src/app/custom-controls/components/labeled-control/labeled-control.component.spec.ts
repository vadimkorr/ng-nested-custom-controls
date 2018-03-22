import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledControlComponent } from './labeled-control.component';

describe('LabeledControlComponent', () => {
  let component: LabeledControlComponent;
  let fixture: ComponentFixture<LabeledControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeledControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabeledControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
