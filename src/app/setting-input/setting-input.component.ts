import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-setting-input',
  templateUrl: './setting-input.component.html',
  styleUrls: ['./setting-input.component.css']
})
export class SettingInputComponent {

  number?: number
  step?: number

  constructor(public dataService: DataService) {
    this.dataService.numberSubject$.subscribe(val => this.number = val)
    this.dataService.stepSubject$.subscribe(val => this.step = val)
  }

  onNumberChange(value: number): void {
    this.dataService.updateNumber(value)
  }

  onStepChange(value: number): void {
    this.dataService.updateStep(value)
  }
}
