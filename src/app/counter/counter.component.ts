import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NumberService } from '../services/number.service';
import { CounterSettingsDialogComponent } from '../counter-settings-dialog/counter-settings-dialog.component';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  constructor(private numberService: NumberService, public dialog: MatDialog) { }

  number: number = 0;
  step: number = 1;

  openSettingsDialog(): void {
    const dialogRef = this.dialog.open(CounterSettingsDialogComponent);

    dialogRef.componentInstance.settingsDialogData = {
      number: this.number,
      step: this.step
    };

    dialogRef.componentInstance.onSettingsChanged.subscribe(receivedData => {
      if (!!receivedData) {
        this.number = this.numberService.updateNumber(this.number, receivedData.number);
        this.step = this.numberService.updateStep(this.step, receivedData.step);
      }
    })
  }

  increaseNumber(): void {
    this.number = this.numberService.increaseNumber(this.number, this.step);
  }

  decreaseNumber(): void {
    this.number = this.numberService.decreaseNumber(this.number, this.step);
  }
}
