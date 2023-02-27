import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputFormComponent } from '../../../shared/modules/input-form/input-form.component';
import { FormComponent } from './form.component';

describe('Form Component', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormComponent, InputFormComponent],
      imports: [FormsModule, ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('Should show error for required fields with no data', () => {
    const firstName = component.orderForm.get('firstName');
    firstName?.setValue('');
    firstName?.markAsDirty();
    expect(firstName?.valid).toBeFalsy();

    const lastName = component.orderForm.get('lastName');
    lastName?.setValue('');
    lastName?.markAsDirty();
    expect(lastName?.valid).toBeFalsy();

    const phone = component.orderForm.get('phone');
    phone?.setValue('');
    phone?.markAsDirty();
    expect(phone?.valid).toBeFalsy();

    const city = component.orderForm.get('city');
    city?.setValue('');
    city?.markAsDirty();
    expect(city?.valid).toBeFalsy();

    const street = component.orderForm.get('street');
    street?.setValue('');
    street?.markAsDirty();
    expect(street?.valid).toBeFalsy();

    fixture.detectChanges();

    const errorMessages = element.querySelectorAll('.error-message');
    expect(errorMessages[0].textContent).toContain('The field is required');
    expect(errorMessages.length).toBe(5);
  });

  it('Should be valid with correctly input data', () => {
    const firstName = component.orderForm.get('firstName');
    firstName?.setValue('John');
    firstName?.markAsDirty();
    expect(firstName?.valid).toBeTruthy();

    const lastName = component.orderForm.get('lastName');
    lastName?.setValue('Doeh');
    lastName?.markAsDirty();
    expect(lastName?.valid).toBeTruthy();

    const phone = component.orderForm.get('phone');
    phone?.setValue('123123123123');
    phone?.markAsDirty();
    expect(phone?.valid).toBeTruthy();

    const city = component.orderForm.get('city');
    city?.setValue('Wroclaw');
    city?.markAsDirty();
    expect(city?.valid).toBeTruthy();

    const street = component.orderForm.get('street');
    street?.setValue('Legnicka');
    street?.markAsDirty();
    expect(street?.valid).toBeTruthy();

    fixture.detectChanges();

    const errorMessages = element.querySelectorAll('.error-message');
    expect(errorMessages.length).toBe(0);

    expect(component.orderForm.valid).toBeTruthy();
  });
});
