import {Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-price-calculator',
  standalone: true,
  imports: [],
  templateUrl: './price-calculator.component.html',
  styleUrl: './price-calculator.component.css'
})
export class PriceCalculatorComponent {

  price = 19;

  quantity = signal(10);

  // signal that is dependent on the quantity signal
  totalPrice = computed(() => this.price * this.quantity());

  changeQuantity(event: Event){
    this.quantity.set((event.target as HTMLInputElement).valueAsNumber);
  }

}
