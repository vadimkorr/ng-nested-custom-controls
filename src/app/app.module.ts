import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { ExampleNgmodelModule } from './example-ngmodel/example-ngmodel.module';
import { ExampleReactiveFormsModule } from './example-reactive-forms/example-reactive-forms.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    ExampleNgmodelModule,
    ExampleReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
