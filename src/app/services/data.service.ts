import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private numberSubject = new Subject<number>()
  numberSubject$ = this.numberSubject.asObservable()

  private stepSubject = new Subject<number>()
  stepSubject$ = this.stepSubject.asObservable()

  updateNumber(number: number): void {
    this.numberSubject.next(number)
  }

  updateStep(step: number): void {
    this.stepSubject.next(step)
  }
}
