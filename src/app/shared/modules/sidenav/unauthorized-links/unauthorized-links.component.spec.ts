import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorizedLinksComponent } from './unauthorized-links.component';

describe('UnauthorizedLinksComponent', () => {
  let component: UnauthorizedLinksComponent;
  let fixture: ComponentFixture<UnauthorizedLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnauthorizedLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnauthorizedLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
