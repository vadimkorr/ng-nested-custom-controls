import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed, tick, async, fakeAsync } from '@angular/core/testing';
import { CustomControlsModule } from '../../custom-controls.module';

@Component({
  template: `
    <custom-input [placeholder]="placeholder" [type]="type" [id]="id" [(ngModel)]="name"></custom-input>
  `
})
export class CustomInputTestComponent {
  name: string = '';
  placeholder: string = 'custom placeholder';
  type: string = 'text';
  id: string = 'custom_id';
}

fdescribe('InputComponent', () => {
  let fixture: ComponentFixture<CustomInputTestComponent>;
  let component: CustomInputTestComponent;
  let inputElement: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomInputTestComponent ],
      imports: [ FormsModule, CustomControlsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomInputTestComponent);
    component = fixture.componentInstance;
    inputElement = fixture.nativeElement.querySelector('input');
    fixture.detectChanges();
  });

  describe('should change value passed as @Input()', () => {
    const testCases = [{
      inputName: 'placeholder', initialValue: 'name', newValue: 'new name'
    }, {
      inputName: 'type', initialValue: 'text', newValue: 'password'
    }, {
      inputName: 'id', initialValue: 'initial_id', newValue: 'new_id'
    }];

    testCases.map(tc => {
      it(`for '${tc.inputName}' property`, fakeAsync(() => {
        // Arrange
        const { inputName, initialValue, newValue } = tc;
        // Act
        component[inputName] = newValue;
        tick();
        fixture.detectChanges();
        // Assert
        expect(inputElement[inputName]).toEqual(newValue);
      }));
    });
  });

  it('should change via ngModel from model', fakeAsync(() => {
    // Arrange
    const newName = 'User Name';
    // Act
    component.name = newName;
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    // Assert
    expect(inputElement.value).toEqual(newName);
  }));

  it('should change via ngModel from view', fakeAsync(() => {
    // Arrange
    const newName = 'User Name';
    // Act
    inputElement.value = newName;
    inputElement.dispatchEvent(new Event('change'));
    // Assert
    expect(component.name).toEqual(newName);
  }));
});
