import { Component, Inject, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('editor') editor: HTMLElement;

  constructor(
    public dialogRef: MatDialogRef<ProductModalComponent>,
    private fb: FormBuilder, // @Inject(MAT_DIALOG_DATA) public data: any
    private foodServiceService: FoodServiceService
  ) {}

  ngOnInit(): void {
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

  confirmSelection() {
    this.dialogRef.close();
  }

  addProduct() {
    if (!this.addingForm.valid) {
      return;
    } else {
      this.submitted = true;
      const { category, price, title, img } = this.addingForm.value;
      const newProduct = {
        category,
        img,
        price,
        title,
      };
      this.foodServiceService.addFood(newProduct);
      this.submitted = false;
    }
  }
}
