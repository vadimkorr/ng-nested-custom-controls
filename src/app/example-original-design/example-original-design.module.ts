import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundOriginalDesignComponent } from './playground-original-design/playground-original-design.component';
import { CustomControlsModule } from '../custom-controls/custom-controls.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CustomControlsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PlaygroundOriginalDesignComponent
  ],
  exports: [
    PlaygroundOriginalDesignComponent
  ]
})
export class ExampleOriginalDesignModule { }
