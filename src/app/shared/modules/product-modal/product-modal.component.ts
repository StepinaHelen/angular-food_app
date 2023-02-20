import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FoodInterface, IAddingForm } from '../../types/types';
import { FoodServiceService } from 'src/app/service/food-service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { CustomValidators } from '../../validators/custom-validators';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
})
export class ProductModalComponent implements OnInit {
  addingForm: FormGroup<IAddingForm>;
  submitted = false;

  constructor(
    public dialogRef: MatDialogRef<ProductModalComponent>,
    private fb: FormBuilder,
    private foodServiceService: FoodServiceService,
    @Inject(MAT_DIALOG_DATA)
    public data: { food: FoodInterface | undefined; type: 'edit' | 'add' },
    private domSanitizer: DomSanitizer
  ) {}

  initializeForm(
    title?: string,
    img?: string,
    price?: string,
    category: string = 'Drinks'
  ) {
    this.addingForm = this.fb.group({
      title: new FormControl<string>(title ?? '', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(3)],
      }),
      img: new FormControl<string>(img ?? '', {
        nonNullable: true,
        validators: [Validators.required],
        asyncValidators: [CustomValidators.imageUrl()],
      }),
      price: new FormControl<string>(price ?? '', {
        nonNullable: true,
        validators: [Validators.required, Validators.max(1000)],
      }),
      category: new FormControl<string>(category, {
        nonNullable: true,
      }),
    });
  }

  ngOnInit(): void {
    let { title, img, price, category } = this.data.food ?? {};

    if (category) {
      category = category.charAt(0).toUpperCase() + category.slice(1);
    }

    this.initializeForm(title, img, `${price}`, category);
  }

  addProduct() {
    if (!this.addingForm.valid) {
      return;
    } else {
      const newProduct = this.getDataProduct();
      this.foodServiceService.addFood(newProduct);
      this.submitted = false;
      this.dialogRef.close();
    }
  }

  imgUrl(url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }

  getDataProduct() {
    this.submitted = true;
    let { category, price, title, img } = this.addingForm.value;
    const product = {
      category: category
        ? category?.charAt(0).toLocaleLowerCase() + category?.slice(1)
        : '',
      img: img ? img : '',
      price: price ? Number(price) : 0,
      title: title ? title : '',
    };
    return product;
  }

  saveProduct() {
    const id = this.data.food?.id;
    if (!this.addingForm.valid || !id) {
      return;
    } else {
      const updatedProduct = this.getDataProduct();
      this.foodServiceService.updateFoodItem(id, updatedProduct);
      this.submitted = false;
      this.dialogRef.close({ ...updatedProduct, id });
    }
  }

  close() {
    this.dialogRef.close();
  }
}
