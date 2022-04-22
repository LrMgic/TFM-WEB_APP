import { AbstractControl, ValidatorFn } from "@angular/forms";

const VALID_ID = ["OPER0001", "RRHH0001", "DIRE0001", "Monstrell"];

export function workerIdValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = !VALID_ID.includes(control.value);
    return forbidden ? { wineNameValid: { value: control.value } } : null;
  };
}
