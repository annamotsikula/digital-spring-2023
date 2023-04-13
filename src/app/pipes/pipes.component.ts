import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {

  title: string = 'This is angular pipes'

  myNumber: number = 12.147852

  today : Date = new Date()

}
