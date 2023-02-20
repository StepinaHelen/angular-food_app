import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ButtonModule } from '../button/button.module';
import { CardItemComponent } from './card-item/card-item.component';
import { CardListComponent } from './card-list/card-list.component';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [CardItemComponent, CardListComponent],
  imports: [
    CommonModule,
    ButtonModule,
    MatSnackBarModule,
    QuillModule.forRoot(),
  ],
  exports: [CardItemComponent, CardListComponent],
})
export class CardModule {}
