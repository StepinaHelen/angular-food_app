import { Component, Inject, OnInit, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IAddingForm } from '../../types/types';
import { CATEGORIES } from '../../constants';
import { FoodServiceService } from 'src/app/service/food-service.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
})
export class ProductModalComponent implements OnInit {
  addingForm: FormGroup<IAddingForm>;
  submitted = false;

  quillConfiguration = {
    toolbar: [['image']],
  };

  constructor(
    public dialogRef: MatDialogRef<ProductModalComponent>,
    private fb: FormBuilder,
    private foodServiceService: FoodServiceService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      let { title, img, price, category } = this.data.food;
      category = category.charAt(0).toUpperCase() + category.slice(1);
      this.addingForm = this.fb.group({
        title: new FormControl<string>(title, {
          nonNullable: true,
          validators: [Validators.required, Validators.minLength(3)],
        }),
        img: new FormControl<string>(img, {
          nonNullable: true,
          validators: [Validators.required],
        }),
        price: new FormControl<string>(price, {
          nonNullable: true,
          validators: [Validators.required, Validators.max(1000)],
        }),
        category: new FormControl<string>(category, {
          nonNullable: true,
        }),
      });
    } else {
      this.addingForm = this.fb.group({
        title: new FormControl<string>('', {
          nonNullable: true,
          validators: [Validators.required, Validators.minLength(3)],
        }),
        img: new FormControl<string>('', {
          nonNullable: true,
          validators: [Validators.required],
        }),
        price: new FormControl<string>('', {
          nonNullable: true,
          validators: [Validators.required, Validators.max(1000)],
        }),
        category: new FormControl<string>('Drinks', {
          nonNullable: true,
        }),
      });
    }
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
    const id = this.data.food.id;
    if (!this.addingForm.valid) {
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
