import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product.models';
import{StoreService} from '../../services/store.service';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  myShoppingCart : Product[] = [];
  total = 0;
  products :Product [] = [];
  title : string = 'Convirtiendo las vocales de esto u u';
  constructor(
    private storeservice: StoreService,
    private productsService: ProductsService
  ) { 
    this.myShoppingCart = this.storeservice.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data => {
      this.products = data;
    });
  }

  onAddToShoppingCart(product:Product){
    this.storeservice.addProduct(product);
   this.total =  this.storeservice.getTotal();
    
  }
}
