import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';
import { CartPageComponent } from 'src/app/cart-page/cart-page.component';
import { Router, RouterModule } from '@angular/router';
import { inject } from '@angular/core/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        // RouterTestingModule.withRoutes([
        //   { path: 'cart', component: CartPageComponent },
        // ]),
        RouterModule.forRoot([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title Page', () => {
    const h2 = element.querySelector('h2');
    expect(h2?.textContent).toContain('Simple food');
  });

  // it('should route to the cart Page',
  //   // fixture.debugElement?.query(By.css('.cart-link')).nativeElement.click();
  //   // const href = element.querySelector('.cart-link')?.click();
  //   // .querySelector('.cart-link')
  //   // ?.getAttribute('href');
  //   // console.log(location.href, location, 'll');
  //   // expect(location.href).toEqual('/cart');
  //   async(inject([Router, Location], (router: Router, location: Location) => {

  //     let fixture = TestBed.createComponent(TestComponent);
  //     fixture.detectChanges();

  //     fixture.debugElement.query(By.css('a')).nativeElement.click();
  //     fixture.whenStable().then(() => {
  //       expect(location.path()).toEqual('/settings/testing/edit/1');
  //       console.log('after expect');
  //     });
  //   }));
  // );
  // it('should go to url', inject(
  //   [Router, Location],
  //   (router: Router, location: Location) => {
  //     // let fixture = TestBed.createComponent(TestComponent);
  //     // fixture.detectChanges();

  //     fixture.debugElement.query(By.css('.cart-link')).nativeElement.click();
  //     fixture.whenStable().then(() => {
  //       expect(location.href).toEqual('/cart');
  //       console.log('after expect', location);
  //     });
  //   }
  // ));

  // WORK IN PROGRESS
  it('Should navigate t', async () => {
    // const location: Location = TestBed.get(Location);
    await fixture.debugElement
      .query(By.css('.cart-link'))
      .nativeElement.click();
    fixture.detectChanges();
    // expect(location.path()).toBe('');
    console.log(location);
  });
});
