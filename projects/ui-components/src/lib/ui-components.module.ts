import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LabeledComponent } from './labeled/labeled.component';
import { InputComponent } from './input/input.component';
import { LabeledInputComponent } from './labeled-input/labeled-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LabeledComponent, InputComponent, LabeledInputComponent],
  imports: [FormsModule, CommonModule],
  exports: [InputComponent, LabeledInputComponent]
})
export class UiComponentsModule {}
