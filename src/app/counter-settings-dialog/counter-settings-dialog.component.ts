import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-settings-dialog',
  templateUrl: './counter-settings-dialog.component.html',
  styleUrls: ['./counter-settings-dialog.component.css']
})
export class CounterSettingsDialogComponent {

  @Input() settingsDialogData: any;
  @Output() onSettingsChanged: EventEmitter<any> = new EventEmitter();

  onSaveSettingsClick(): void {
    this.onSettingsChanged.emit(this.settingsDialogData);
  }
}
