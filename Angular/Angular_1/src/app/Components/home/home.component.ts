import { StoreData } from './../../ViewModels/store-data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  StoreInfo: StoreData;
  imgOn: boolean = true
  constructor() {
    this.StoreInfo = new StoreData('test image', 'https://picsum.photos/400/200', ["Test1", "Test2", "Test3"])
  }
  toggleImg = () => {

    this.imgOn = !this.imgOn;

  }

}

