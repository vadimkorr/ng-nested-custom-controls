import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { InputComponent } from './input.component';
import { FormsModule } from '@angular/forms';
import { ElementRef } from '@angular/core';

fdescribe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  let rootInputEl: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InputComponent
      ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    rootInputEl = component.getInputControl().nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should change value passed as @Input()', () => {
    const testCases = [{
      inputName: 'placeholder',
      initialValue: 'initial placeholder',
      newValue: 'new placeholder'
    }, {
      inputName: 'type',
      initialValue: 'text',
      newValue: 'password'
    }, {
      inputName: 'id',
      initialValue: 'initial_id',
      newValue: 'new_id'
    }];

    testCases.map(tc => {
      it(`for '${tc.inputName}' property`, () => {
        // Arrange
        const { inputName, initialValue, newValue } = tc;

        // Act
        component[inputName] = initialValue;
        fixture.detectChanges();
        component[inputName] = newValue;
        fixture.detectChanges();

        // Assert
        expect(rootInputEl[inputName]).toEqual(newValue);
      });
    });

  });

  it('change via ngModel from model', fakeAsync(() => {
    // Arrange
    const newValue = 'new value';

    // Act
    component.value = newValue;
    tick();
    fixture.detectChanges();

    rootInputEl.dispatchEvent(new Event('input'));
    tick();
    fixture.detectChanges();

    // Assert
    expect(rootInputEl.value).toEqual(newValue);
  }));

  it('change via ngModel from view', fakeAsync(() => {
    // Arrange
    const newValue = 'new value';

    // Act
    rootInputEl.value = newValue;
    tick();
    fixture.detectChanges();

    rootInputEl.dispatchEvent(new Event('input'));
    tick();
    fixture.detectChanges();

    // Assert
    expect(component.value).toEqual(newValue);
  }));
});
