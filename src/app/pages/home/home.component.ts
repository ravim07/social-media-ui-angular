import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  acceptDataFromParent(e:any){
    console.log(e,"data from parent")
  }

  onHandleChange(e:any){
    console.log(e.target.value)
  }

}
