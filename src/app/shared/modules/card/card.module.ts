import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ButtonModule } from '../button/button.module';
import { CardItemComponent } from './card-item/card-item.component';
import { CardListComponent } from './card-list/card-list.component';

@NgModule({
  declarations: [CardItemComponent, CardListComponent],
  imports: [CommonModule, ButtonModule, MatSnackBarModule],
  exports: [CardItemComponent, CardListComponent],
})
export class CardModule {}
