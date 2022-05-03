import { Component, EventEmitter, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-counter-settings-dialog',
  templateUrl: './counter-settings-dialog.component.html',
  styleUrls: ['./counter-settings-dialog.component.css']
})
export class CounterSettingsDialogComponent implements OnInit {

  settingsDialogData: any;
  onSettingsChanged: EventEmitter<any> = new EventEmitter();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.updateNumber(this.settingsDialogData.number)
    this.dataService.updateStep(this.settingsDialogData.step)

    this.dataService.numberSubject$.subscribe(val => this.settingsDialogData.number = val);
    this.dataService.stepSubject$.subscribe(val => this.settingsDialogData.step = val);
  }

  onSaveSettingsClick(): void {
    this.onSettingsChanged.emit(this.settingsDialogData);
  }
}
