import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundNgmodelComponent } from './playground-ngmodel.component';

describe('PlaygroundNgmodelComponent', () => {
  let component: PlaygroundNgmodelComponent;
  let fixture: ComponentFixture<PlaygroundNgmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundNgmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundNgmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
