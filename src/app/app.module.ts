import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { NgbdDatepickerPopup } from "./datepicker-popup";
// import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { HttpClientModule } from "@angular/common/http";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";


// import { FormsModule, ReactiveFormsModule } from "@angular/forms";




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [],
  declarations: [AppComponent, NgbdDatepickerPopup],
  bootstrap: [AppComponent]
})
export class AppModule {}



