import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function confirmedValidator(
    controlName: string,
    matchingControlName: string
  ): ValidatorFn {
    return function (controls: AbstractControl): ValidationErrors | null {
      if (controls) {
        const Password = controls.get(controlName)!.value;
        const ConfirmPassword = controls.get(matchingControlName)!.value;
  
        if (
          controls.get(matchingControlName)!.errors &&
          !controls.get(matchingControlName)!.errors?.['confirmedValidator']
        ) {
          return null;
        }
  
        if (Password !== ConfirmPassword) {
          controls
            .get(matchingControlName)
            ?.setErrors({ confirmedValidator: true });
          return { mismatchedPassword: true };
        } else {
          controls.get(matchingControlName)?.setErrors(null);
        }
      }
      return null;
    };
  }