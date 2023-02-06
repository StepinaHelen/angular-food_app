import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IAddingForm } from '../../types/types';
import { CATEGORIES } from '../../constants';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
})
export class ProductModalComponent implements OnInit {
  addingForm: FormGroup<IAddingForm>;
  src: any;

  constructor(
    public dialogRef: MatDialogRef<ProductModalComponent>,
    private fb: FormBuilder
     // @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.addingForm = this.fb.group({
      title: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(3)],
      }),
      img: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(3)],
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

  fileChangeEvent(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    const reader = new FileReader();
    reader.onload = () => (this.src = reader.result);
    reader.readAsDataURL(files[0]);
  }

  addProduct() {
    console.log(this.addingForm.value);
  }
}
