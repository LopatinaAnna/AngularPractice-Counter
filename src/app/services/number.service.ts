import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  increaseNumber(number: number, step: number): number {
    return number + step;
  }

  decreaseNumber(number: number, step: number): number {
    return number - step;
  }

  updateNumber(currentNumber: number, newNumber: number): number {
    if (!!newNumber) {
      return newNumber;
    }
    return currentNumber;
  }

  updateStep(currentStep: number, newStep: number): number {
    if (newStep > 0) {
      return newStep;
    }
    return currentStep;
  }
}
