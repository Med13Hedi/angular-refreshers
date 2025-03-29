import {Component, computed, input, signal} from '@angular/core';
import {Product} from "../../Product";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // input signal == input is a signal
  products = input.required<Product[]>();


  priceFilter = signal({operator: '', value: 0});

  filteredProducts = computed(() => {
    return this.products().filter(product => this.priceFilter().operator === '' ||
      (this.priceFilter().operator === '>=' && product.price >= this.priceFilter().value) ||
      (this.priceFilter().operator === '<=' && product.price <= this.priceFilter().value)
    )
  })


  changePriceFilterOperator(event: Event) {
    let operator = (event.target as HTMLInputElement).value;
    this.priceFilter.set({...this.priceFilter(), operator});
  }

  changePriceFilterValue(event: Event) {
    let value = parseFloat((event.target as HTMLInputElement).value);
    this.priceFilter.set({...this.priceFilter(), value});
  }


}
