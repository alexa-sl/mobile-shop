import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../shared/services/product.service";
import {IProduct} from "../shared/interfaces/IProduct";
import {IIDItem} from "../shared/interfaces/IIDItem";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit, OnDestroy {
 constructor(private prodService: ProductService) {}

 cartProducts: IProduct[];
 totalPrice: number = 0;
 countedIDs: IIDItem[] = [];
 productAmountForm: FormGroup;
 productAmount: FormControl;

 ngOnInit() {
   this.cartProducts = this.prodService.getCartProducts();

   for (let i=0; i < this.cartProducts.length; i++) {
     this.totalPrice += this.cartProducts[i].price;
   }

   this.getCurrentProductCount();
   this.cartProducts = this.removeDuplicates(this.cartProducts);
   this.mergeCounted(this.cartProducts, this.countedIDs, 'id');

   this.productAmountForm = new FormGroup({
     productAmount: new FormControl()
   })
   console.log('on init')
 }

 getCurrentProductCount(){
   const groupedProducts = new Map<number, number>();

   this.cartProducts.forEach((product) => {
     if (!groupedProducts.has(product.id)) {
       groupedProducts.set(product.id, 1);
     } else {
       groupedProducts.set(product.id, groupedProducts.get(product.id) + 1);
     }
   });

   for (let key of groupedProducts) {
     const productId= key[0];
     const productCount= key[1];
     const foundProduct = this.cartProducts.find(product => product.id === productId);
     foundProduct.counter = productCount;
   }

   /*for (let i = 0; i < products.length; i++) {
     let currentProduct = products[i];

     if (this.countedIDs.length) {
       const foundedIndex = this.countedIDs
         .findIndex(value => value.id === currentProduct.id);

       if (foundedIndex !== -1) {
         this.countedIDs[foundedIndex].counter++;
       } else {
         this.countedIDs.push({id: currentProduct.id, counter: 1});
       }
     } else {
       this.countedIDs.push({id: currentProduct.id, counter: 1});
     }
   }*/
 }

 removeDuplicates(arr) {
   let jsonObj = arr.map(JSON.stringify);
   let uniqueSet = new Set(jsonObj);

   return Array.from(uniqueSet).map((i: string) => JSON.parse(i));
 }

 mergeCounted(target, source, prop) {
    source.forEach(sourceProduct => {
      let targetProduct = target.find(targetProduct => {
        return sourceProduct[prop] === targetProduct[prop];
      });
      if (targetProduct) {
        Object.assign(targetProduct, sourceProduct);
      }
    })
 }

 removeProduct(product: IProduct) {
   this.cartProducts = this.cartProducts.filter(currentProduct => currentProduct.id !== product.id);
 }

 updateProductAmount(product) {
   this.cartProducts.find(currentProduct => {
     if (currentProduct.id === product.id) {
       currentProduct.counter = this.productAmountForm.get('productAmount').value;
     }
   })
 }

 ngOnDestroy() {
   console.log('on destroy')
   this.countedIDs = [];
   this.cartProducts = [];
   this.totalPrice = 0;
   this.productAmountForm.reset();
 }

}
