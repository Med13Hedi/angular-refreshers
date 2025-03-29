import {Component, computed, signal} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products = signal([
    {id: 1, name: "Milk", price: 1.45},
    {id: 2, name: "Bread", price: 3.90},
    {id: 3, name: "Tomatoes", price: 2.20}
  ]);


  filterName = signal('');

  filteredProducts = computed(() => {
    return this.products().filter(
      product => product.name
        .toLowerCase()
        .includes(this.filterName().toLowerCase())
    );
  })

  changeFilter(event: Event){
    let newFilterName = (event.target as HTMLInputElement).value
    this.filterName.set(newFilterName);
  }

}
