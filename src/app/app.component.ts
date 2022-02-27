import { Component } from '@angular/core';
import { Product } from './models/product.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgparent = '';
  products :Product [] = [
    {
      id: "1",
      name: "Buss Toy",
      image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuUEATtbnxV-nHTv5ONmEkPvDnZ4UcVVjuzA&usqp=CAU",
      price : 100000
    },
    {
      id: "2",
      name: "Camera",
      image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxez5CQJ4jVZlKLYHiUqHHAL5uLx6IuaUlrg&usqp=CAU",
      price : 200000
    },
    {
      id: "3",
      name: "Dino",
      image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrCaCtjqPRDBT8gIEi1FAxEXt50yxukHk-YQ&usqp=CAU",
      price : 50000
    },
    {
      id: "4",
      name: "StarWars",
      image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1KIUA4Zt0027wp7t57xxy-H_8zKEf70TCEw&usqp=CAU",
      price : 350000
    }
  ];
  onLoaded(img: string) {
    console.log("Log padre", img)
  }
}
