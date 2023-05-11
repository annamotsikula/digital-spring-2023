import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { APIService } from 'src/app/core/api.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
 @Input() pagination: number[] = []
 @Output() itemsAmountPerPage: EventEmitter<number> = new EventEmitter<number>()
 @Output() pageUpdated: EventEmitter<number> = new EventEmitter<number>()
 amount: number = 10
 currentPageObs$!: Observable<number>;
  constructor(private _apiService: APIService) {
    
    
  }
  ngOnInit(): void {
    this.currentPageObs$ = this._apiService.currentPage$.asObservable()
  }
  updatePage(pageNumber: number) {
    console.log(pageNumber)
    this._apiService.currentPage$.next(pageNumber)
  }

  changeAmountView() {
    
  this.itemsAmountPerPage.emit(this.amount)
  }
}
