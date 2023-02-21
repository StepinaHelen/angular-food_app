import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponentComponent } from './tab-component.component';
import { SingleTabComponent } from './single-tab/single-tab.component';

@NgModule({
  declarations: [TabComponentComponent, SingleTabComponent],
  imports: [CommonModule],
  exports: [TabComponentComponent, SingleTabComponent],
})
export class TabComponentModule {}
