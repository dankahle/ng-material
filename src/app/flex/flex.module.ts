import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModModule} from "../material-mod/material-mod.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import { FxCardComponent } from './fx-card/fx-card.component';
import { FxPlayComponent } from './fx-play/fx-play.component';
import { CssHolyGrailComponent } from './css-holy-grail/css-holy-grail.component';
import { FxHolyGrailComponent } from './fx-holy-grail/fx-holy-grail.component';
import { FxGridComponent } from './fx-grid/fx-grid.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModModule,
    FlexLayoutModule

  ],
  declarations: [FxCardComponent, FxPlayComponent, CssHolyGrailComponent, FxHolyGrailComponent, FxGridComponent],
  exports: [FxCardComponent, FxPlayComponent, CssHolyGrailComponent, FxHolyGrailComponent, FxGridComponent],
})
export class FlexModule { }
