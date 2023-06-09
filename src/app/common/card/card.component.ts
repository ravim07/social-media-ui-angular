import { Component, OnInit } from '@angular/core';
import { AddToCardService } from 'src/app/services/add-to-card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private addToCardService: AddToCardService) { }
  cartCount: number = 0;

  ngOnInit(): void {
  }

  addToCart() {
    this.cartCount = this.cartCount+1;
    this.addToCardService.addToCardCount.next(this.cartCount);
  }

  removeFromCart() {
    if(this.cartCount === 0){
      return
    }
    this.cartCount = this.cartCount - 1;
    this.addToCardService.addToCardCount.next(this.cartCount);
  }

}
