import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FoodWithAmountInterface } from 'src/app/shared/types/types';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const foods: FoodWithAmountInterface = {
  category: 'pizza',
  img: 'https://kfoods.com/images1/newrecipeicon/seafood-pizza_4999.jpg',
  price: 90,
  title: 'Seafood pizza',
  id: '1',
  type: 'create',
  amount: 1,
};

import { CardItemComponent } from './card-item.component';

describe('CardItemComponent', () => {
  let component: CardItemComponent;
  let fixture: ComponentFixture<CardItemComponent>;
  let postElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardItemComponent],
      imports: [MatSnackBarModule, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CardItemComponent);
    component = fixture.componentInstance;
    component.food = foods; // input
    postElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    const h1 = postElement.querySelector('h1');
    expect(h1?.textContent).toContain(foods.title);
  });
  it('should display price', () => {
    const price = postElement.querySelector('.card-content-price');
    expect(price?.textContent).toContain(foods.price);
  });
  it('should display amount', () => {
    const amount = postElement.querySelector(
      '.card-amount-container-text-count'
    );
    expect(amount?.textContent).toContain(foods.amount);
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
