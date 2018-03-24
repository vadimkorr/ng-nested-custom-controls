import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PlaygroundTemplateDrivenFormsComponent } from './components/playground-template-driven-forms/playground-template-driven-forms.component';
import { CustomControlsModule } from '../custom-controls/custom-controls.module';

@NgModule({
  imports: [
    CommonModule,
    CustomControlsModule,
    FormsModule
  ],
  declarations: [
    PlaygroundTemplateDrivenFormsComponent
  ],
  exports: [
    PlaygroundTemplateDrivenFormsComponent
  ]
})
export class ExampleTemplateDrivenFormsModule { }
