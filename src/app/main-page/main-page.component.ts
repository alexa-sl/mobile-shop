import {Component, OnInit} from '@angular/core';
import {ProductService} from "../shared/services/product.service";
import {IProduct} from "../shared/interfaces/IProduct";
import {Observable} from "rxjs";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  constructor(private prodService: ProductService) {}
  products$: Observable<IProduct[]> = new Observable<IProduct[]>();

  ngOnInit() {
    this.products$ = this.prodService.getAllProducts();
  }
}
