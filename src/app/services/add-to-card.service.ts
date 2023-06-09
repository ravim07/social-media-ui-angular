import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddToCardService {

  addToCardCount = new Subject<number>();
  constructor() { }

  // postAddToCartCount(count:number) {
  //   this.addToCardCount.next(count);
  // }
}
