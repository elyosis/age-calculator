import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { InputComponent } from './container/input/input.component';
import { FormComponent } from './container/form/form.component';
import { DisplayComponent } from './container/display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    InputComponent,
    FormComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
