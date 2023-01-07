import { Component, OnInit, ViewChild } from '@angular/core';
import { FoodServiceService } from '../service/food-service.service';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'food-order-form-page',
  templateUrl: './order-form-page.component.html',
  styleUrls: ['./order-form-page.component.scss'],
})
export class OrderFormPageComponent implements OnInit {
  @ViewChild('orderForm') myForm: FormComponent;
  constructor(private foodServiceService: FoodServiceService) {}

  ngOnInit(): void {}

  submitHandler() {
    this.foodServiceService.addOrderItemToHistory({
      ...this.myForm.orderForm.value,
      date: new Date().toString(),
    });
    this.myForm.orderForm.reset();
  }
}
