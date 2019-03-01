import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledComponent } from './labeled.component';

describe('LabeledComponent', () => {
  let component: LabeledComponent;
  let fixture: ComponentFixture<LabeledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabeledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
