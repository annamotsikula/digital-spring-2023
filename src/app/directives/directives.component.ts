import { Component } from '@angular/core';
import { Product } from './products.interface';



@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  testDirective = {
    isValid: true,
    title: 'Angular directives',
    amount: 100,
    inStock: false
  }

  products : Product[] = []

  constructor() {
    this.products = [
      {
        name: 't-shirt',
        price: 200,
        inStock: true,
        amount: 56,
        isOnSale: false,
        category: 'clothes',
        description: 'Sample text '
      },
      {
        name: 'boots',
        price: 500,
        inStock: true,
        amount: 12,
        isOnSale: true,
        category: 'shoesg',
        description: 'Sample boots description',
        salePercentage: 0.25
      },
      {
        name: 'watch',
        price: 80,
        inStock: false,
        amount: 0,
        isOnSale: false,
        category: 'accessories',
        description: 'text text text text'
      }
    ]
  }

}
