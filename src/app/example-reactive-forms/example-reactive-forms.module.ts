import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundReactiveFormsComponent } from './components/playground-reactive-forms/playground-reactive-forms.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PlaygroundReactiveFormsComponent
  ],
  exports: [
    PlaygroundReactiveFormsComponent
  ]
})
export class ExampleReactiveFormsModule { }
