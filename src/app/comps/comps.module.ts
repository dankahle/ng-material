import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox/checkbox.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import 'hammerjs';
import {MaterialModModule} from "../material-mod/material-mod.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { InputComponent } from './input/input.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { RadioComponent } from './radio/radio.component';
import { SelectComponent } from './select/select.component';
import {PlayComponent} from './play/play.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModModule
  ],
  declarations: [
    CheckboxComponent,
    AutoCompleteComponent,
    InputComponent,
    DatepickerComponent,
    RadioComponent,
    SelectComponent,
    PlayComponent,
    // Dir1Directive,
    // Comp1Component,
    SliderComponent,
  ],
  exports: [
    CheckboxComponent,
    AutoCompleteComponent,
    InputComponent,
    DatepickerComponent,
    RadioComponent,
    SelectComponent,
    PlayComponent,
    SliderComponent,
  ]
})
export class CompsModule { }
