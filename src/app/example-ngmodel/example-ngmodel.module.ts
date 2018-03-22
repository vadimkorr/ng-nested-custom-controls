import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundNgmodelComponent } from './components/playground-ngmodel/playground-ngmodel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PlaygroundNgmodelComponent
  ],
  exports: [
    PlaygroundNgmodelComponent
  ]
})
export class ExampleNgmodelModule { }
