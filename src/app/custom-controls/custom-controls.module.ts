import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputComponent } from './components/input/input.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InputComponent
  ],
  exports: [
    InputComponent
  ]
})
export class CustomControlsModule { }
