import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdAutocompleteModule, MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdInputModule, MdNativeDateModule,
  MdRadioModule, MdSelectModule, MdSliderModule, MdSlideToggleModule, MdButtonToggleModule, MdChipsModule
} from "@angular/material";

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdRadioModule, MdInputModule, MdAutocompleteModule, MdDatepickerModule,
    MdNativeDateModule, MdSelectModule, MdSliderModule, MdSlideToggleModule, MdButtonToggleModule, MdChipsModule],
  exports: [MdButtonModule, MdCheckboxModule, MdRadioModule, MdInputModule, MdAutocompleteModule, MdDatepickerModule,
    MdNativeDateModule, MdSelectModule, MdSliderModule, MdSlideToggleModule, MdButtonToggleModule, MdChipsModule],
})
export class MaterialModModule { }
