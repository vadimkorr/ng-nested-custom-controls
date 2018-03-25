import {
  Component,
  OnInit,
  forwardRef,
  Input,
  ViewChild
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR, ControlValueAccessor
} from '@angular/forms';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'custom-labeled-input',
  templateUrl: './labeled-input.component.html',
  styleUrls: ['./labeled-input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => LabeledInputComponent),
    multi: true
  }]
})
export class LabeledInputComponent implements
  OnInit, ControlValueAccessor {

  value: string;
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() type: string = 'text';
  @Input() isRequired: boolean = false;

  @ViewChild('input') private _input: InputComponent;

  private _onChange = (_: any) => {};
  private _onTouched = () => {};

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this._input.setDisabledState(isDisabled);
  }

  ngOnInit() {
    const self = this;
    this._input.inputElement.nativeElement.addEventListener('change', function(event) {
      self._onChange(this.value);
    });
    this._input.inputElement.nativeElement.addEventListener('keyup', function(event) {
      self._onChange(this.value);
    });
    this._input.inputElement.nativeElement.addEventListener('blur', function(event) {
      self._onTouched();
    });
  }
}
