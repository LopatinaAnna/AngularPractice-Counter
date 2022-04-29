import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-settings-dialog',
  templateUrl: './counter-settings-dialog.component.html',
  styleUrls: ['./counter-settings-dialog.component.css']
})
export class CounterSettingsDialogComponent {

  settingsDialogData: any;
  onSettingsChanged: EventEmitter<any> = new EventEmitter();

  onSaveSettingsClick(): void {
    this.onSettingsChanged.emit(this.settingsDialogData);
  }

  onNumberChange(number: number) {
    this.settingsDialogData.number = number;
  }

  onStepChange(step: number) {
    this.settingsDialogData.step = step;
  }
}
