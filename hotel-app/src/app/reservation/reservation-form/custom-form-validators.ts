import {AbstractControl, ValidatorFn} from "@angular/forms";


export function futureDateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to the start of the day
    const inputDate = new Date(value);

    if (inputDate >= today) {
      return null;
    }
    return { futureDateInvalid: true };
  };
}

export function roomNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (value >= 100 && value <= 108 || value >= 200 && value <= 211 || value >= 305 && value <= 325) {
      return null
    }
    return { roomNumberInvalid: true };
  };
}
