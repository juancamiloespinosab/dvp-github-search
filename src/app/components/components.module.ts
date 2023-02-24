import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { NavbarComponent } from './navbar/navbar.component';
import { IconComponent } from './icon/icon.component';
import { ButtonComponent } from './button/button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { TextInputComponent } from './text-input/text-input.component';
import { TextComponent } from './text/text.component';
import { CardComponent } from './card/card.component';
import { CardsGridComponent } from './cards-grid/cards-grid.component';


@NgModule({
  declarations: [
    NavbarComponent,
    IconComponent,
    ButtonComponent,
    IconButtonComponent,
    TextInputComponent,
    TextComponent,
    CardComponent,
    CardsGridComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NavbarComponent,
    NavbarComponent,
    IconComponent,
    ButtonComponent,
    IconButtonComponent,
    TextInputComponent,
    TextComponent,
    CardComponent,
    CardsGridComponent,
  ]
})
export class ComponentsModule { }
