import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  increaseNumber(number: number) {
    return ++number;
  }

  decreaseNumber(number: number) {
    return --number;
  }
}
