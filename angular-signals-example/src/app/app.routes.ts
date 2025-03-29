import { Routes } from '@angular/router';
import {PriceCalculatorComponent} from "./price-calculator/price-calculator.component";
import {ProductsComponent} from "./products/products.component";
import {ProductListComponent} from "./product-list/product-list.component";

export const routes: Routes = [
  {
    path: 'price',
    component: PriceCalculatorComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  // {
  //   path: 'allproducts',
  //   component: ProductListComponent
  // },
];
