import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

export const validateAllFormFields = (formGroup: FormGroup) => {
  Object.keys(formGroup.controls).forEach((field) => {
    const control = formGroup.get(field);
    if (control instanceof FormControl) {
      control?.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {
      validateAllFormFields(control);
    }
  });
};

export const generateErrors = (
  controlErrors: ValidationErrors | null,
  key: string
) => {
  const errors: Record<string, string> = {
    required: 'The field is required',
    minlength: `The minimum length for this field is ${controlErrors?.['minlength']?.requiredLength}`,
    pattern: 'The field is not valid',
    match: 'Field Password and Confirm Password must to be equal',
    email: 'Invalid email address',
    imgUrl: 'Invalid image url',
    max: `Cannot be greater than ${controlErrors?.['max']?.max}`,
  };
  return errors[key];
};
