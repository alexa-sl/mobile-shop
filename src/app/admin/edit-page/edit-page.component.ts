import { Component } from '@angular/core';
import {ProductService} from "../../shared/services/product.service";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent {
  constructor(private prodService: ProductService) {}

  deleteProduct(id) {
    this.prodService.deleteProduct(id);
  }
}
