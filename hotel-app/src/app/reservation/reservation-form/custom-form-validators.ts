import {AbstractControl, ValidatorFn} from "@angular/forms";


export function roomNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (value >= 100 && value <= 108 || value >= 200 && value <= 211 || value >= 305 && value <= 325) {
      console.log("valid")
      return null
    }
    console.log("not valid")
    return { roomNumberInvalid: true };
  };
}
