import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundTemplateDrivenFormsComponent } from './playground-template-driven-forms.component';

describe('PlaygroundTemplateDrivenFormsComponent', () => {
  let component: PlaygroundTemplateDrivenFormsComponent;
  let fixture: ComponentFixture<PlaygroundTemplateDrivenFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundTemplateDrivenFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundTemplateDrivenFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
