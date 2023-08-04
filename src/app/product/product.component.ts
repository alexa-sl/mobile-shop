import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../shared/interfaces/IProduct";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct;

  ngOnInit() {
    console.log(this.product)
  }

}
