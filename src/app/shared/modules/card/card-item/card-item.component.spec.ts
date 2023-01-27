import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FoodItemWithAmountMock } from 'src/app/shared/testing-moks/testing-mocks';
import { CardItemComponent } from './card-item.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('CardItemComponent', () => {
  let component: CardItemComponent;
  let fixture: ComponentFixture<CardItemComponent>;
  let postElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardItemComponent],
      imports: [MatSnackBarModule, NoopAnimationsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(CardItemComponent);
    component = fixture.componentInstance;
    component.food = FoodItemWithAmountMock;
    postElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    const h1 = postElement.querySelector('h1');
    expect(h1?.textContent).toContain(FoodItemWithAmountMock.title);
  });
  it('should display price', () => {
    const price = postElement.querySelector('.card-content-price');
    expect(price?.textContent).toContain(FoodItemWithAmountMock.price);
  });
  it('should display amount', () => {
    const amount = postElement.querySelector(
      '.card-amount-container-text-count'
    );
    expect(amount?.textContent).toContain(FoodItemWithAmountMock.amount);
  });

  it('should increment food amount', () => {
    const amount = postElement.querySelector(
      '.card-amount-container-text-count'
    );
    component.increment();
    fixture.detectChanges();
    expect(amount?.textContent).toContain(2);
  });

  it('should decrement food amount', () => {
    const amount = postElement.querySelector(
      '.card-amount-container-text-count'
    );
    component.decrement();
    fixture.detectChanges();
    expect(amount?.textContent).toContain(1);
  });

  it('should decrement food amount without return', () => {
    const amount = postElement.querySelector(
      '.card-amount-container-text-count'
    );
    component.increment();
    component.increment();
    component.increment();
    component.decrement();
    fixture.detectChanges();
    expect(amount?.textContent).toContain(3);
  });

  it('should add food to the cart', () => {
    component.handleAdd();
    fixture.detectChanges();
    const amount = postElement.querySelector(
      '.card-amount-container-text-count'
    );
    component.decrement();
    fixture.detectChanges();
    expect(amount?.textContent).toContain(1);
  });
});
