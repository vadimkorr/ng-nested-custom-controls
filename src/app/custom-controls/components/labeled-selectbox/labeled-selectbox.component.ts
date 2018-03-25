import { Component, OnInit, Input, ViewChild, forwardRef, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectboxComponent } from '../selectbox/selectbox.component';

@Component({
  selector: 'custom-labeled-selectbox',
  templateUrl: './labeled-selectbox.component.html',
  styleUrls: ['./labeled-selectbox.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => LabeledSelectboxComponent),
    multi: true,
  }]
})
export class LabeledSelectboxComponent
  implements OnInit, ControlValueAccessor {

  value: string = '';

  @Input() label: string = '';
  @Input() id: string;
  @Input() valueField: string = undefined;
  @Input() labelField: string = undefined;
  @Input() collection: any[] = [];
  @Input() isRequired: boolean = false;

  @ViewChild('selectbox') private _selectbox: SelectboxComponent;
  get selectbox() {
    return this._selectbox;
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
    this._selectbox.setDisabledState(isDisabled);
  }

  ngOnInit() {
    const self = this;
    this._selectbox.selectElement.nativeElement.addEventListener('change', function(event) {
      self._onChange(this.value);
    });
    this._selectbox.selectElement.nativeElement.addEventListener('blur', function(event) {
      self._onTouched();
    });
  }

}
