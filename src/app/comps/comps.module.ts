import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import 'hammerjs';
import {MaterialModModule} from "../material-mod/material-mod.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { GridListComponent } from './layout/grid-list/grid-list.component';
import {CheckboxComponent} from "./form-controls/checkbox/checkbox.component";
import {AutoCompleteComponent} from "./form-controls/auto-complete/auto-complete.component";
import {InputComponent} from "./form-controls/input/input.component";
import {DatepickerComponent} from "./form-controls/datepicker/datepicker.component";
import {RadioComponent} from "./form-controls/radio/radio.component";
import {SelectComponent} from "./form-controls/select/select.component";
import {PlayComponent} from "./play/play.component";
import {SliderComponent} from "./form-controls/slider/slider.component";
import {SlideToggleComponent} from "./form-controls/slide-toggle/slide-toggle.component";
import {ButtonsComponent} from "./buttons-indicators/buttons/buttons.component";
import {ToggleButtonsComponent} from "./buttons-indicators/toggle-buttons/toggle-buttons.component";
import {ChipsComponent} from "./buttons-indicators/chips/chips.component";
import {IconsComponent} from "./buttons-indicators/icons/icons.component";
import {SpinnersComponent} from "./buttons-indicators/progress-spinner/spinners.component";
import {DkProgressComponent} from "./buttons-indicators/progress-bar/progress.component";
import {DkCardComponent} from "./layout/dk-card/dk-card.component";
import {DkMenuComponent} from "./navigation/dk-menu/dk-menu.component";
import {DkSidenavComponent} from "./navigation/dk-sidenav/dk-sidenav.component";
import {DkToolbarComponent} from "./navigation/dk-toolbar/dk-toolbar.component";
import {DkListComponent} from "./layout/dk-list/dk-list.component";
import {TabsComponent} from "./layout/tabs/tabs.component";
import {RouterModule} from "@angular/router";
import { DialogComponent } from './popups-modals/dialog/dialog.component';
import { DialogChildComponent } from './popups-modals/dialog/dialog-child/dialog-child.component';
import { TooltipComponent } from './popups-modals/tooltip/tooltip.component';
import { SnackBarComponent } from './popups-modals/snack-bar/snack-bar.component';
import { SnackBarChildComponent } from './popups-modals/snack-bar/snack-bar-child/snack-bar-child.component';
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModModule,
    RouterModule,
    FlexLayoutModule
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
    DkToolbarComponent,
    DkListComponent,
    GridListComponent,
    TabsComponent,
    DialogComponent,
    DialogChildComponent,
    TooltipComponent,
    SnackBarComponent,
    SnackBarChildComponent,
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
    DkToolbarComponent,
    DkListComponent,
    GridListComponent,
    TabsComponent,
    DialogComponent,
    DialogChildComponent,
    TooltipComponent,
    SnackBarComponent,
    SnackBarChildComponent,
  ],
  entryComponents: [DialogChildComponent, SnackBarChildComponent]
})
export class CompsModule { }
