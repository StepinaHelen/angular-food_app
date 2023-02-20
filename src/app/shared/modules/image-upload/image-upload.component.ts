import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import { generateErrors } from '../../helpers/form.helpers';

@Component({
  selector: 'food-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ImageUploadComponent,
    },
  ],
})
export class ImageUploadComponent implements OnInit, ControlValueAccessor {
  constructor() {}

  @Input()
  control: FormControl = new FormControl();

  imageURL: string | null = null;

  onChange = (url: string) => {};

  onTouched = () => {};

  touched = false;

  disabled = false;

  writeValue(url: string) {
    this.imageURL = url;
  }

  registerOnChange(onChange: (url: string) => void) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: () => void) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  @ViewChild('fileInput') input: ElementRef<HTMLInputElement>;

  ngOnInit(): void {}

  handleErrors(controlErrors: ValidationErrors | null, key: string) {
    return generateErrors(controlErrors, key);
  }

  fileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length) {
      const file = target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageURL = reader.result as string;
        this.markAsTouched();
        this.onChange(this.imageURL);
        this.input.nativeElement.value = '';
      };
    }
  }

  onClick() {
    this.markAsTouched();
    this.input.nativeElement.click();
  }
}
