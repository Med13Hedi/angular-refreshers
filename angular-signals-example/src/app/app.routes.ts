import { Routes } from '@angular/router';
import {PriceCalculatorComponent} from "./price-calculator/price-calculator.component";
import {ProductsComponent} from "./products/products.component";

export const routes: Routes = [
  {
    path: 'price',
    component: PriceCalculatorComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
];
