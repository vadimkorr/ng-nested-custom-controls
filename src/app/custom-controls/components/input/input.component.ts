import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  Renderer2,
  forwardRef
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

@Component({
  selector: 'custom-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true,
  }]
})
export class InputComponent implements ControlValueAccessor {

  constructor(
    private _renderer: Renderer2
  ) { }

  value: string = '';
  @Input() type: string = 'text';
  @Input() id: string;
  @Input() placeholder: string = '';
  @Input() showValidationResult: boolean = false;

  @ViewChild('inputControl') private _inputControl: ElementRef;
  getInputControl(): ElementRef {
    return this._inputControl;
  }
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
    this._renderer.setProperty(this._inputControl.nativeElement, 'disabled', isDisabled);
  }

  onChange(event: any) {
    this.value = event;
    this._onChange(event);
  }
  onKeyup(event: any) {
    this._onChange(event.target.value);
  }
  onBlur(event: any) {
    this._onTouched();
  }
}
