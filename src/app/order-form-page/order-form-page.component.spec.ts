import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderHistoryService } from 'src/app/service/order-history-service.service';
import { ButtonComponent } from '../shared/modules/button/button.component';
import { findElementByTestId } from '../shared/helpers/testing-helpers';
import { formData } from '../shared/testing-moks/testing-mocks';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormComponent } from './components/form/form.component';
import { OrderFormPageComponent } from './order-form-page.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('OrderFormPageComponent', () => {
  let component: OrderFormPageComponent;
  let fixture: ComponentFixture<OrderFormPageComponent>;
  let orderHistoryService: OrderHistoryService;
  let element: HTMLElement;

  const setup = async () => {
    orderHistoryService = jasmine.createSpyObj<OrderHistoryService>(
      'OrderHistoryService',
      ['addOrderItemToHistory', 'getHistoryOrderItem']
    );

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [
        OrderFormPageComponent,
        FormComponent,
        FormInputComponent,
        ButtonComponent,
      ],
      providers: [
        { provide: OrderHistoryService, useValue: orderHistoryService },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderFormPageComponent);
    element = fixture.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  };

  it('Submits the form', fakeAsync(async () => {
    await setup();

    const firstName = component.myForm.orderForm.get('firstName');
    const lastName = component.myForm.orderForm.get('lastName');
    const phone = component.myForm.orderForm.get('phone');
    const city = component.myForm.orderForm.get('city');
    const street = component.myForm.orderForm.get('street');

    firstName?.setValue(formData.firstName);
    lastName?.setValue(formData.lastName);
    phone?.setValue(formData.phone);
    city?.setValue(formData.city);
    street?.setValue(formData.street);

    const orderHistoryValues = {
      ...component.myForm.orderForm.getRawValue(),
      date: new Date('10-10-2022').toString(),
      foods: [],
    };

    spyOn(component, 'submitHandler').and.callFake(() => {
      orderHistoryService.addOrderItemToHistory(orderHistoryValues);
    });

    let button = findElementByTestId(fixture, 'food-button');
    button.nativeElement.click();

    fixture.detectChanges();

    expect(component.submitHandler).toHaveBeenCalledTimes(1);
    expect(orderHistoryService.addOrderItemToHistory).toHaveBeenCalledWith(
      orderHistoryValues
    );
  }));
});
