import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdAutocompleteModule, MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdInputModule, MdNativeDateModule,
  MdRadioModule
} from "@angular/material";

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdRadioModule, MdInputModule, MdAutocompleteModule, MdDatepickerModule, MdNativeDateModule],
  exports: [MdButtonModule, MdCheckboxModule, MdRadioModule, MdInputModule, MdAutocompleteModule, MdDatepickerModule, MdNativeDateModule],
})
export class MaterialModModule { }
