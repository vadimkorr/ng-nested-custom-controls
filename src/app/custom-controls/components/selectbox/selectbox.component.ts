import { Component, OnInit, forwardRef, Renderer2, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'custom-selectbox',
  templateUrl: './selectbox.component.html',
  styleUrls: ['./selectbox.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectboxComponent),
    multi: true,
  }]
})
export class SelectboxComponent implements ControlValueAccessor {

  constructor(
    private _renderer: Renderer2
  ) { }

  value: any;
  @Input() id: string;
  @Input() valueField: string = undefined;
  @Input() labelField: string = undefined;
  @Input() collection: any[] = [];
  @Output() change = new EventEmitter<any>();

  @ViewChild('selectElement') private _selectElement: ElementRef;
  get selectElement(): ElementRef {
    return this._selectElement;
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
    this._renderer.setProperty(this._selectElement.nativeElement, 'disabled', isDisabled);
  }

  onChange(event: any) {
    this._onChange(event.target.value);
  }
  onBlur() {
    this._onTouched();
  }

  getValue(item: any) {
    return this.valueField ? item[this.valueField] : item;
  }
  getLabel(item: any) {
    return this.labelField ? item[this.labelField] : item;
  }

}
