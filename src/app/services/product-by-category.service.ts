import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { getMockProductsByCategory } from './mock-data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class ProductByCategoryService {

  constructor() { }

  GetProductByCategory(id: any): Observable<any> {
    return of(getMockProductsByCategory(id));
  }
}
