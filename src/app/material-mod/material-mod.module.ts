import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdAutocompleteModule, MdButtonModule, MdCheckboxModule, MdInputModule, MdRadioModule} from "@angular/material";

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdRadioModule, MdInputModule, MdAutocompleteModule],
  exports: [MdButtonModule, MdCheckboxModule, MdRadioModule, MdInputModule, MdAutocompleteModule],
})
export class MaterialModModule { }
