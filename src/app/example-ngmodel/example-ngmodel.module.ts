import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PlaygroundNgmodelComponent } from './components/playground-ngmodel/playground-ngmodel.component';
import { CustomControlsModule } from '../custom-controls/custom-controls.module';

@NgModule({
  imports: [
    CommonModule,
    CustomControlsModule,
    FormsModule
  ],
  declarations: [
    PlaygroundNgmodelComponent
  ],
  exports: [
    PlaygroundNgmodelComponent
  ]
})
export class ExampleNgmodelModule { }
