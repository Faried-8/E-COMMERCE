import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from './../../services/product.service';
import { GlobalService } from '../../services/global.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productDetails: any = {};
  relatedProducts: any[] = [];
  colors: any[] = [];
  mainImage: string = 'images/download.png';
  productId: any;
  selectedQuantity: number = 1;
  flag: boolean = false;  // Flag to indicate if data is loaded

  addCartDetails = {
    product_id: 0,
    qty: 0,
    is_collage: 0,
    is_offer: 0
  };

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private cartService: CartService,
    private globalService: GlobalService,
    private snackBar: MatSnackBar
  ) {
    // Get the product ID from the route parameters and load product details
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id');
      this.loadProductDetails(this.productId);
    });
  }

  ngOnInit(): void {}

  // Fetch product details and set properties for productDetails and related products
  loadProductDetails(id: string | null): void {
    if (id) {
      this.productService.singleProduct(id).subscribe(
        (res => {
          if (res.data[0]) {
            this.productDetails = res.data[0];
            this.colors = this.productDetails.attributes[0]?.variations.map((variation: any) => ({
              name: variation.name,
              hex_color: variation.hex_color,
            }));
            this.relatedProducts = this.productDetails.similar_products || [];
            this.mainImage = this.productDetails?.gallery[0]?.name || this.mainImage;
            this.flag = true; // Set flag to true to indicate data has loaded
        } else {
            this.router.navigateByUrl('**'); // Redirect if no product found
          }
        }),
        (error) => {
          console.error('Error loading product details:', error);
          this.flag = true; // Prevent loader from hanging
        }
      );
    }
  }

  // Method to add product to cart
  addToCart(productId: number): void {
    // if (this.globalService.is_login) {
      this.addCartDetails.product_id = productId; // Use the passed productId
      this.addCartDetails.qty = this.selectedQuantity;

      this.cartService.GetAddCart(this.addCartDetails).subscribe(
        res => {
          console.log(res);
          console.log(this.addCartDetails);
          
          
          this.snackBar.open('Product added to cart!', 'Close', {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        },
        (error) => {
          console.error('Error adding to cart:', error);
          this.snackBar.open('Error adding item to cart. Please try again.', 'Close', {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        }
      );
    // } else {
    //   this.snackBar.open('Please login first.', 'Close', {
    //     duration: 2000,
    //     horizontalPosition: 'center',
    //     verticalPosition: 'top',
    //   });
    //   this.router.navigateByUrl('/login');
    // }
  }

  // Change main image when a thumbnail image is clicked
  changeImage(imageSrc: string): void {
    this.mainImage = imageSrc;
  }

  // Increment the product quantity
  incrementQuantity(): void {
    this.selectedQuantity++;
  }

  // Decrement the product quantity if it's greater than 1
  decrementQuantity(): void {
    if (this.selectedQuantity > 1) {
      this.selectedQuantity--;
    }
  }
}
