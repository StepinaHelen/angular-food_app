import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'food-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  @Input()
  buttonText: string = '';

  @Input()
  className: string = '';

  ngOnInit(): void {}
}
