import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {IProduct} from "../interfaces/IProduct";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  create(product) {
    return this.http.post(`${environment.apiUrl}/products`, product)
  }

  getAllProducts() {
    return this.http.get<IProduct[]>(`${environment.apiUrl}/products`)
  }

  getProduct(id) {
    return this.http.get<IProduct>(`${environment.apiUrl}/products/${id}`)
  }

  deleteProduct(id) {
     return this.http.delete(`${environment.apiUrl}/products/${id}`)
  }

  updateProduct(id, product) {
    return this.http.patch(`${environment.apiUrl}/products/${id}`, product)
  }
}
