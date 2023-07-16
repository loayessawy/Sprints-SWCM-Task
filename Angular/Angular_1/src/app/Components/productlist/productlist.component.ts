import { Component } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent {
  prdList:IProduct[];
  constructor(){
    this.prdList=[
    {id:100, name:'Product Item 1',price:50, quantity:30, imgURL:'https://picsum.photos/50/50', categoryID:2 }, 
    {id:120, name:'Product Item 2',price:100, quantity:0, imgURL:'https://picsum.photos/50/50', categoryID:10 }, 
    {id:150, name:'Product Item 3',price:75, quantity:230, imgURL:'https://picsum.photos/50/50', categoryID:5 },
    {id:180, name:'Product Item 4',price:90, quantity:0, imgURL:'https://picsum.photos/50/50', categoryID:1 },
    {id:1250, name:'Product Item 5',price:150, quantity:220, imgURL:'https://picsum.photos/50/50', categoryID:251 },
    {id:1270, name:'Product Item 6',price:160, quantity:220, imgURL:'https://picsum.photos/50/50', categoryID:5 }
    ]

  }
 
}
