import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputComponent } from './components/input/input.component';
import { LabeledControlComponent } from './components/labeled-control/labeled-control.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InputComponent,
    LabeledControlComponent
  ],
  exports: [
    InputComponent
  ]
})
export class CustomControlsModule { }
