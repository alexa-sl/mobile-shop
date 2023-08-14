import { Component } from '@angular/core';
import {ProductService} from "../services/product.service";
import {IProduct} from "../interfaces/IProduct";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
 constructor(private prodService: ProductService) {}

  cartProducts$: IProduct[] = this.prodService.getCartProducts();
}
