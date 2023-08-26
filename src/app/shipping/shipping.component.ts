import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  shippingCosts!: Observable<{ type: string; price: number }[]>;
  //Il punto esclamativo indica che all'inizio la variabile è undefined ma che quando verrà settata o gettata andrà trattata come il tipo specificato.

  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
