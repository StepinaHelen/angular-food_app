import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { SingleTabComponent } from './single-tab/single-tab.component';

@Component({
  selector: 'food-tab-component',
  templateUrl: './tab-component.component.html',
  styleUrls: ['./tab-component.component.scss'],
})
export class TabComponentComponent implements AfterContentInit {
  @ContentChildren(SingleTabComponent) tabs: QueryList<SingleTabComponent>;

  constructor() {}

  ngAfterContentInit() {
    let activeTabs = this.tabs.filter((tab) => tab.active);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: SingleTabComponent) {
    this.tabs.toArray().forEach((tab) => (tab.active = false));

    tab.active = true;
  }
}
