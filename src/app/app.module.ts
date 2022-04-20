import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { NumberService } from './services/number.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CounterSettingsDialogComponent } from './counter-settings-dialog/counter-settings-dialog.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterSettingsDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [NumberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
