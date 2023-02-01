import { Component, Input, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/service/spinner.service';

@Component({
  selector: 'food-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  providers: [SpinnerService],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  @Input()
  isDisabled: boolean;

  @Input()
  buttonText: string = '';

  @Input()
  className: string = '';

  ngOnInit(): void {}
}
