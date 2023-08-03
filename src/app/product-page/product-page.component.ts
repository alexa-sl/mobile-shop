import {Component, OnInit} from '@angular/core';
import {ProductService} from "../shared/services/product.service";
import {Observable, switchMap} from "rxjs";
import {IProduct} from "../shared/interfaces/IProduct";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
 constructor(
   private prodService: ProductService,
   private route: ActivatedRoute
 ) {}
  product$: Observable<IProduct> = new Observable<IProduct>();

  ngOnInit(): void {

    console.log('on init');
    this.product$ = this.route.params
      .pipe(switchMap(params => {
        console.log('component');
        return this.prodService.getProduct(params['id']);
    }))
  }


}
