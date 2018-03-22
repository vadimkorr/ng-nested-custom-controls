import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundReactiveFormsComponent } from './playground-reactive-forms.component';

describe('PlaygroundReactiveFormsComponent', () => {
  let component: PlaygroundReactiveFormsComponent;
  let fixture: ComponentFixture<PlaygroundReactiveFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundReactiveFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
