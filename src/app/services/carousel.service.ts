import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_TOP_CATEGORIES } from './mock-data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor() {}

  getCarouselImages(): Observable<any> {
    return of(MOCK_TOP_CATEGORIES);
  }
}
