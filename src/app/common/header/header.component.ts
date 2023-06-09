import { Component, OnInit } from '@angular/core';
import { AddToCardService } from 'src/app/services/add-to-card.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  count: number = 0;

  constructor(private addToCardService: AddToCardService) {
    this.addToCardService.addToCardCount.subscribe((data)=>{
      this.count = data;
    })
   }

  ngOnInit(): void {
  }

}
