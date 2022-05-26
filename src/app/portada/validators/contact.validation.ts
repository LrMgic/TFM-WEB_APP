import { AbstractControl } from '@angular/forms';

const methodTipes = ['Tel', 'What', 'email'];
export class ContactValidator {
  static MethodTipeOf(c: AbstractControl) {
    if (c.value == null) return null;
    for (let i of methodTipes) {
      if (c.value == i) {
        return { MethodTipe: true };
      }
    }
    return null;
  }
}
