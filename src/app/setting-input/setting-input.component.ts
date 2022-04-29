import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-setting-input',
  templateUrl: './setting-input.component.html',
  styleUrls: ['./setting-input.component.css']
})
export class SettingInputComponent {

  @Input() value!: number;
  @Input() minValue!: number;
  @Output() valueChange = new EventEmitter<number>();

  onValueChange(model: number) {
    this.value = model;
    this.valueChange.emit(this.value);
  }
}
