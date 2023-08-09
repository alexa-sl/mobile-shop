import {Component, OnInit} from '@angular/core';
import {ProductService} from "../shared/services/product.service";
import {IProduct} from "../shared/interfaces/IProduct";
import {IIDItem} from "../shared/interfaces/IIDItem";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
 constructor(private prodService: ProductService) {
 }
 cartProducts: IProduct[];
 totalPrice: number = 0;
 countedIDs: IIDItem[] = [];

 ngOnInit() {
   this.cartProducts = this.prodService.getCartProducts();

   for (let i=0; i<this.cartProducts.length; i++) {
     this.totalPrice += +this.cartProducts[i].price;
   }

   this.countID(this.cartProducts);
 }

 countID(products){
   for (let i = 0; i < products.length; i++) {
     let currentProduct = products[i];

     if (this.countedIDs.length) {
       let result = this.countedIDs.findIndex(value => value.id === currentProduct.id);

       if (result != -1) {
         this.countedIDs[result].counter++;
       } else {
         this.countedIDs.push({id: currentProduct.id, counter: 1});
       }
     } else {
       this.countedIDs.push({id: currentProduct.id, counter: 1});
     }
   }

   // this.cartProducts.map(product => {
   //
   // })
 }

}
