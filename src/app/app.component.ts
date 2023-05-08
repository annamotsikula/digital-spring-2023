import { Component, OnInit } from '@angular/core';
import { Observable, filter, map, mergeMap, of, tap, toArray } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  numbers: number[] = [12, 14, 40, 340, 120, 875]
  numbers$!: Observable<number[]>
  ngOnInit() {

    this.numbers$  =  of(...this.numbers).pipe(
      tap(data => console.log(data)),
      filter(num => num < 100),
      map(num => num * 10),
      tap(data => console.log(`Number entered filter successfully: ${data}`)),
      toArray()
    )
    // .subscribe(result => this.numbers = result)

  }

  emitNewNumber() {
    const randomNumber = Math.ceil( Math.random() * 100);
    console.log('Value emitted, ', randomNumber);
    this.numbers$ = this.numbers$.pipe(
      mergeMap((value) => of([...this.numbers, randomNumber]))
    )
  }
}


