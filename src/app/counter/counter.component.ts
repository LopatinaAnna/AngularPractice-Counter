import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  constructor(private numberService: NumberService) { }

  number: number = 0;

  increaseNumber(): void {
    this.number = this.numberService.increaseNumber(this.number);
  }

  decreaseNumber(): void {
    this.number = this.numberService.decreaseNumber(this.number);
  }
}
