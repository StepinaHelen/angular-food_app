import {
  AbstractControl,
  ValidatorFn,
  ValidationErrors,
  AsyncValidatorFn,
} from '@angular/forms';

export class CustomValidators {
  static compareWith(controlNameForCompare: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      const controlToCompare = control.root.get(controlNameForCompare);

      return controlToCompare && controlToCompare.value !== control.value
        ? {
            match: true,
          }
        : null;
    };
  }

  static imageUrl(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> => {
      return new Promise<{ imgUrl: boolean } | null>(function (resolve) {
        let timer: NodeJS.Timeout;
        let timeout = 1000;
        let img = new Image();

        img.onerror = img.onabort = function () {
          clearTimeout(timer);
          resolve({ imgUrl: true });
        };
        img.onload = function () {
          clearTimeout(timer);
          resolve(null);
        };
        timer = setTimeout(function () {
          img.src = '//!!!!/test.jpg';
          resolve({ imgUrl: true });
        }, timeout);
        img.src = control.value;
      });
    };
  }
}
