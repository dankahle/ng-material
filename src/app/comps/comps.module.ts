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
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ToggleButtonsComponent } from './toggle-buttons/toggle-buttons.component';
import { ChipsComponent } from './chips/chips.component';
import { IconsComponent } from './icons/icons.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { DkProgressComponent } from './progress/progress.component';
import { DkCardComponent } from './dk-card/dk-card.component';
import { DkMenuComponent } from './dk-menu/dk-menu.component';
import { DkSidenavComponent } from './dk-sidenav/dk-sidenav.component';

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
    SlideToggleComponent,
    ButtonsComponent,
    ToggleButtonsComponent,
    ChipsComponent,
    IconsComponent,
    SpinnersComponent,
    DkProgressComponent,
    DkCardComponent,
    DkMenuComponent,
    DkSidenavComponent,
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
    SlideToggleComponent,
    ButtonsComponent,
    ToggleButtonsComponent,
    ChipsComponent,
    IconsComponent,
    SpinnersComponent,
    DkProgressComponent,
    DkCardComponent,
    DkMenuComponent,
    DkSidenavComponent,
  ]
})
export class CompsModule { }
