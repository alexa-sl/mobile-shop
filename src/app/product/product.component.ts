import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../shared/interfaces/IProduct";
import {ProductService} from "../shared/services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  constructor(private prodService: ProductService) {
  }
  @Input() product: IProduct;

  ngOnInit() {

  }

  addToCart(product) {
    this.prodService.addCartProduct(product);
  }
}
