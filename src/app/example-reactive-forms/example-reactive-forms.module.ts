import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaygroundReactiveFormsComponent } from './components/playground-reactive-forms/playground-reactive-forms.component';
import { CustomControlsModule } from '../custom-controls/custom-controls.module';

@NgModule({
  imports: [
    CommonModule,
    CustomControlsModule
  ],
  declarations: [
    PlaygroundReactiveFormsComponent
  ],
  exports: [
    PlaygroundReactiveFormsComponent
  ]
})
export class ExampleReactiveFormsModule { }
