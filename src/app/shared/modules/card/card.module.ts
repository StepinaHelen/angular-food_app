import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ButtonsModule } from '../button/button.module';
import { CardItemComponent } from './card-item/card-item.component';
import { CardListComponent } from './card-list/card-list.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [CardItemComponent, CardListComponent],
  imports: [CommonModule, ButtonsModule, MatSnackBarModule, ButtonModule],
  exports: [CardItemComponent, CardListComponent],
})
export class CardsModule {}
