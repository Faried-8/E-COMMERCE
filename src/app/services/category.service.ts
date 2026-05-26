import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_CATEGORIES } from './mock-data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategories(): Observable<any> {
    return of(MOCK_CATEGORIES);
  }

  getCategoriesList(): Observable<any> {
    return of(MOCK_CATEGORIES);
  }
}
