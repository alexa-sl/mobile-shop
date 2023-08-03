import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map, tap} from "rxjs";
import {IProductResponse} from "../interfaces/IProductResponse";
import {IProduct} from "../interfaces/IProduct";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  create(product) {
    return this.http.post(`${environment.apiUrl}/products`, product)
      .pipe(map((res: IProductResponse) => {
        return {...product, id: res.id};
    }));
  }

  getAllProducts() {
    return this.http.get<IProduct[]>(`${environment.apiUrl}/products`)
      .pipe(
        tap((res) => {
          console.log('res', res);
          return res;
        }),
      )
  }

  getProduct(id) {
    console.log('prod service');
    return this.http.get<IProduct>(`${environment.apiUrl}/products/${id}`)
      .pipe(
        tap(res => console.log('product ', res.image))
      )
  }
}
