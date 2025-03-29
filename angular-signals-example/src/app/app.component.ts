import {Component, signal, effect} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from "@angular/common";
import {Product} from "../Product";
import {ProductListComponent} from "./product-list/product-list.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-signals-example';
  theme = signal('light');
  label = this.theme();
  constructor() {

    effect(() => {
      this.label = this.theme();
    })
  }

  toggleDarkMode(){
    this.theme.update(currentValue => currentValue === 'light' ? 'dark' : 'light');
  }

  allProducts: Product[] = [
    {id: 1, name: "Milk", price: 1.45},
    {id: 2, name: "Bread", price: 3.90},
    {id: 3, name: "Tomatoes", price: 2.20},
    {id: 4, name: "Cheese", price: 4.50},
    {id: 5, name: "Butter", price: 2.80},
    {id: 6, name: "Eggs", price: 3.00},
    {id: 7, name: "Apples", price: 2.50},
    {id: 8, name: "Oranges", price: 3.10}
  ];

}
