import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs";
import {ProductResponseInterface} from "../interfaces/productResponse.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  create(product) {
    return this.http.post(`${environment.apiUrl}/products`, product)
      .pipe(map((res: ProductResponseInterface) => {
        return {...product, id: res.id};
    }));
  }
}