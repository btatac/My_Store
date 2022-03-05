import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product.models'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  myShoppingCart : Product[] = [];
  total = 0;
  products :Product [] = [
    {
      id: "1",
      name: "Duck Toy",
      image :"https://us.123rf.com/450wm/mirawonderland/mirawonderland2006/mirawonderland200600028/149903576-two-wooden-toys-against-a-blue-background-with-space-for-copy.jpg?ver=6",
      price : 100000
    },
    {
      id: "2",
      name: "Barbie",
      image :"https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2013/11/barbie-bestselling-toys-of-all-time-scaled.jpg",
      price : 200000
    },
    {
      id: "3",
      name: "Locomotora",
      image :"https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      price : 50000
    },
    {
      id: "4",
      name: "BabyToys",
      image :"https://www.gannett-cdn.com/presto/2021/09/30/USAT/8e801462-49fb-4b6a-9fa1-ba67149db5bf-Janelles_Hot_Toy_HERO.png",
      price : 350000
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onAddToShoppingCart(product:Product){
    this.myShoppingCart.push(product);
    this.total = this.myShoppingCart.reduce((sum, item) => sum +item.price,0)
  }
}
