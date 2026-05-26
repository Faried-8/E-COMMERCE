import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { MOCK_USER_CART } from './mock-data/mock-data';

// In-memory cart store
let cartItems: any[] = JSON.parse(localStorage.getItem('mock_cart') || 'null') || [...MOCK_USER_CART.data];

function saveCart() {
  try { localStorage.setItem('mock_cart', JSON.stringify(cartItems)); } catch(e) {}
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  GetUserCart(): Observable<any> {
    return of({ status: 'Success', data: cartItems });
  }

  GetAddCart(obj: any): Observable<any> {
    const existing = cartItems.find(item => item.product_id === obj.product_id);
    if (existing) {
      existing.qty += (obj.qty || 1);
    } else {
      cartItems.push({
        id: Date.now(),
        product_id: obj.product_id,
        qty: obj.qty || 1,
        product: {
          id: obj.product_id,
          name: `Product #${obj.product_id}`,
          price: 49.99,
          image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80',
        }
      });
    }
    saveCart();
    return of({ status: 'Success', message: 'Product added to cart', data: cartItems });
  }

  GetDeleteCart(id: any): Observable<any> {
    cartItems = cartItems.filter(item => item.id !== id);
    saveCart();
    return of({ status: 'Success', message: 'Item removed from cart', data: cartItems });
  }
}
