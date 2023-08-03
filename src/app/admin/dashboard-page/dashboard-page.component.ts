import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../shared/services/product.service";
import {IProduct} from "../../shared/interfaces/IProduct";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  constructor(private prodService: ProductService) {}

  products: IProduct[] = [];
  deleteSubscription: Subscription;

  deleteProduct(id) {
    this.deleteSubscription = this.prodService.deleteProduct(id).subscribe(res => {
      this.products = this.products.filter(product => product.id != id)
    })
  }


  ngOnInit(): void {
    this.prodService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  ngOnDestroy(): void {
    if (this.deleteSubscription) {
      this.deleteSubscription.unsubscribe();
    }
  }
}
