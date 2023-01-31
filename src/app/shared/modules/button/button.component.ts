import { Component, Input, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/service/spinner.service';

@Component({
  selector: 'food-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  providers: [SpinnerService],
})
export class ButtonComponent implements OnInit {
  constructor(public spinnerService: SpinnerService) {}

  private _isDisabled: boolean;

  @Input() set isDisabled(value: boolean) {
    this._isDisabled = value;
    if (value === true) {
      this.spinnerService.loadingOn();
    } else {
      this.spinnerService.loadingOff();
    }
  }

  get isDisabled(): boolean {
    return this._isDisabled;
  }

  @Input()
  buttonText: string = '';

  @Input()
  className: string = '';

  ngOnInit(): void {}
}
