import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import 'hammerjs';
import {MaterialModModule} from "./material-mod/material-mod.module";
import {CheckboxComponent} from "./comps/checkbox/checkbox.component";
import {FormsModule} from "@angular/forms";
import {CompsModule} from "./comps/comps.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModModule,
    CompsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
