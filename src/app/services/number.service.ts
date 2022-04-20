import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  increaseNumber(number: number, step: number) {
    return number + step;
  }

  decreaseNumber(number: number, step: number) {
    return number - step;
  }

  updateNumber(currentNumber: number, newNumber: number) {
    if (newNumber) {
      return newNumber;
    } else {
      return currentNumber;
    }
  }

  updateStep(currentStep: number, newStep: number) {
    if (newStep > 0) {
      return newStep;
    } else {
      return currentStep;
    }
  }
}
