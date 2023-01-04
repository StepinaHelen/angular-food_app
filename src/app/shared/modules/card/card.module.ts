import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardItemComponent } from './card-item/card-item.component';
import { ButtonModule } from '../button/button.module';
import { CardListComponent } from './card-list/card-list.component';

@NgModule({
  declarations: [CardItemComponent, CardListComponent],
  imports: [CommonModule, ButtonModule],
  exports: [CardItemComponent, CardListComponent],
})
export class CardModule {}
