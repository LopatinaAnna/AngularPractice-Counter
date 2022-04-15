import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'counter';
  @Input() number: number = 0;

  changeNumber(isIncrease: boolean): void{
    if(isIncrease){
      this.number += 1;
    }
    else{
      this.number -= 1;
    }
  }
}
