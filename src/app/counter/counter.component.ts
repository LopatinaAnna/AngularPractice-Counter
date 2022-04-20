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

  increaseNumber(): void {
    this.number = this.numberService.increaseNumber(this.number, this.step);
  }

  decreaseNumber(): void {
    this.number = this.numberService.decreaseNumber(this.number, this.step);
  }

  openSettingsDialog(): void {
    const dialogRef = this.dialog.open(CounterSettingsDialogComponent, {
      data: { number: this.number, step: this.step },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.number = this.numberService.updateNumber(this.number, result.number);
        this.step = this.numberService.updateStep(this.step, result.step);
      }
    });
  }
}
