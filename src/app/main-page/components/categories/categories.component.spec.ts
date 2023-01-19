import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesComponent } from './categories.component';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('click on the Sort Btn Up', () => {
    component.sort = 'desc';
    component.sortItem();
    expect(component.sort).toEqual('asc');
  });

  it('click on the Sort Btn Down', () => {
    component.sort = 'asc';
    component.sortItem();
    expect(component.sort).toEqual('desc');
  });

  it('should emit category of food ', () => {
    spyOn(component.selectedCategory, 'emit');
    component.chooseCategory('Pizza');
    expect(component.selectedCategory.emit).toHaveBeenCalledWith('pizza');
  });

  it('should emit type of sorting', () => {
    spyOn(component.sortItems, 'emit');
    component.sortItem();
    expect(component.sortItems.emit).toHaveBeenCalledWith('desc');
  });
});
