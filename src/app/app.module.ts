import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiagramComponent } from './diagram/diagram.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Diagram2Component } from './diagram2/diagram2.component';

@NgModule({
  declarations: [
    AppComponent,
    DiagramComponent,
    Diagram2Component
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
