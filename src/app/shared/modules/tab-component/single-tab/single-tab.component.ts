import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'food-single-tab',
  templateUrl: './single-tab.component.html',
  styleUrls: ['./single-tab.component.scss'],
})
export class SingleTabComponent implements OnInit {
  @Input('tabTitle') title: string;
  @Input() active = false;

  constructor() {}

  ngOnInit(): void {}
}
