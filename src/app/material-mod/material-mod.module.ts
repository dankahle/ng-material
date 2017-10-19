import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatInputModule, MatNativeDateModule,
  MatRadioModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatButtonToggleModule, MatChipsModule, MatIconModule,
  MatProgressSpinnerModule, MatProgressBarModule, MatCardModule, MatMenuModule, MatSidenavModule, MatToolbarModule,
  MatListModule, MatGridListModule, MatTabsModule, MatDialogModule, MatTooltipModule, MatSnackBarModule
} from "@angular/material";

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatRadioModule, MatInputModule, MatAutocompleteModule, MatDatepickerModule,
    MatNativeDateModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatButtonToggleModule, MatChipsModule, MatIconModule,
    MatProgressSpinnerModule, MatProgressBarModule, MatCardModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatListModule,
    MatGridListModule, MatTabsModule, MatDialogModule, MatTooltipModule, MatSnackBarModule],
  exports: [MatButtonModule, MatCheckboxModule, MatRadioModule, MatInputModule, MatAutocompleteModule, MatDatepickerModule,
    MatNativeDateModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatButtonToggleModule, MatChipsModule, MatIconModule,
    MatProgressSpinnerModule, MatProgressBarModule, MatCardModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatListModule,
    MatGridListModule, MatTabsModule, MatDialogModule, MatTooltipModule, MatSnackBarModule],
})
export class MaterialModModule { }
