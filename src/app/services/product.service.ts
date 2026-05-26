import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { getMockProduct } from './mock-data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  singleProduct(id: any): Observable<any> {
    return of(getMockProduct(id));
  }

  getRelatedProducts(product_id: any): Observable<any> {
    return of(getMockProduct(product_id));
  }
}
