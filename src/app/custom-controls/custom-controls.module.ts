import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputComponent } from './components/input/input.component';
import { LabeledComponent } from './components/labeled/labeled.component';
import { LabeledInputComponent } from './components/labeled-input/labeled-input.component';
import { FormsModule } from '@angular/forms';
import { SelectboxComponent } from './components/selectbox/selectbox.component';
import { LabeledSelectboxComponent } from './components/labeled-selectbox/labeled-selectbox.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    InputComponent,
    LabeledComponent,
    LabeledInputComponent,
    SelectboxComponent,
    LabeledSelectboxComponent
  ],
  exports: [
    InputComponent,
    LabeledInputComponent,
    SelectboxComponent,
    LabeledSelectboxComponent
  ]
})
export class CustomControlsModule { }
