import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  number: number;
  step: number;
}

@Component({
  selector: 'app-counter-settings-dialog',
  templateUrl: './counter-settings-dialog.component.html',
  styleUrls: ['./counter-settings-dialog.component.css']
})
export class CounterSettingsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CounterSettingsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }
}
