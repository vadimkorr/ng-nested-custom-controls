import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundOriginalDesignComponent } from './playground-original-design.component';

describe('PlaygroundOriginalDesignComponent', () => {
  let component: PlaygroundOriginalDesignComponent;
  let fixture: ComponentFixture<PlaygroundOriginalDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundOriginalDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundOriginalDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
