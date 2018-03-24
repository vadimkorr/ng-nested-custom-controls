import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledSelectboxComponent } from './labeled-selectbox.component';

describe('LabeledSelectboxComponent', () => {
  let component: LabeledSelectboxComponent;
  let fixture: ComponentFixture<LabeledSelectboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeledSelectboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabeledSelectboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
