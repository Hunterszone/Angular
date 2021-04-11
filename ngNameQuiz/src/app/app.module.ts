import { NgModule, Injector, DoBootstrap, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello-comp/hello.component';
import { RainbowDirective } from './components/hello-comp/rainbow.directive';

@NgModule({
  imports:      [ BrowserModule , FormsModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent, RainbowDirective],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule{}
