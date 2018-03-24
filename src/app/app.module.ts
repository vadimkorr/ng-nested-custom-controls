import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { ExampleTemplateDrivenFormsModule } from './example-template-driven-forms/example-template-driven-forms.module';
import { ExampleReactiveFormsModule } from './example-reactive-forms/example-reactive-forms.module';
import { ExampleOriginalDesignModule } from './example-original-design/example-original-design.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    ExampleTemplateDrivenFormsModule,
    ExampleReactiveFormsModule,
    ExampleOriginalDesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
