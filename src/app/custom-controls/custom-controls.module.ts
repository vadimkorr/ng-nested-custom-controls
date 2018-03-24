import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputComponent } from './components/input/input.component';
import { LabeledControlComponent } from './components/labeled-control/labeled-control.component';
import { LabeledInputComponent } from './components/labeled-input/labeled-input.component';
import { FormsModule } from '@angular/forms';
import { SelectboxComponent } from './components/selectbox/selectbox.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    InputComponent,
    LabeledControlComponent,
    LabeledInputComponent,
    SelectboxComponent,
  ],
  exports: [
    InputComponent,
    LabeledInputComponent,
    SelectboxComponent,
  ]
})
export class CustomControlsModule { }
