import { CartService } from './../../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: any[] = [];
  totalCart: number = 0;

  constructor(
    private snackBar: MatSnackBar,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartService.GetUserCart().subscribe((res: any) => {
      // Map mock data to the shape the template expects
      this.cartProducts = (res.data || []).map((item: any) => ({
        ...item,
        details: {
          name: item.product?.name || 'Product',
          price_after: item.product?.price || 0,
          gallary: { gallary_name: item.product?.image || '' }
        },
        qty: item.qty || 1,
      }));
      this.calcTotal();
    });
  }

  calcTotal(): void {
    this.totalCart = this.cartProducts.reduce(
      (sum: number, p: any) => sum + (p.details?.price_after || 0) * (p.qty || 1), 0
    );
  }

  calculateSubtotal(product: any): number {
    return (product.details?.price_after || 0) * (product.qty || 1);
  }

  onQuantityChange(product: any, event: any): void {
    product.qty = Number(event.target.value);
    this.calcTotal();
  }

  deleteCart(id: number): void {
    this.cartService.GetDeleteCart(id).subscribe(
      (res: any) => {
        this.loadCart();
        this.snackBar.open('Item removed from cart!', 'Close', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      },
      (error: any) => {
        this.snackBar.open('Error deleting item. Please try again.', 'Close', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    );
  }
}
