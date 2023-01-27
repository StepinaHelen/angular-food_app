import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

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
}
