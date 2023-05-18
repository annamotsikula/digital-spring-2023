import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, filter, map, mergeMap, of, switchMap, tap, toArray } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  numbers: number[] = [12, 14, 40, 340, 120, 875]
  numbers$!: Observable<number[]>

  @ViewChild('testbutton') btn!: ElementRef 
  ngOnInit() {
    this.numbers$  =  of(...this.numbers).pipe(
      tap(data => console.log(data)),
      filter(num => num < 100),
      map(num => num * 10),
      tap(data => console.log(`Number entered filter successfully: ${data}`)),
      toArray(),
      switchMap(data => of(data).pipe()
      )
    )
    // .subscribe(result => this.numbers = result)

  }
  ngAfterViewInit(): void {
  }
  emitNewNumber() {
    const randomNumber = Math.ceil( Math.random() * 100);
    console.log('Value emitted, ', randomNumber);
    this.numbers$ = this.numbers$.pipe(
      mergeMap((value) => of([...value, randomNumber]))
    )
  }

  showInfo() {
    console.log('Button clicked')
    const btnElement = this.btn.nativeElement as HTMLButtonElement
    btnElement.style.backgroundColor = '#ccc'
  }
}


