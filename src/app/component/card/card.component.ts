import { Component, Input } from '@angular/core';
import { ProductByCategoryService } from '../../services/product-by-category.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  // @Input() cards_data:any;
  @Input() ProductCategory:any;

// constructor(private pts : ProductByCategoryService){
//   console.log(this.ProductCategory);
  
// }

ngOnInit(): void {
  console.log( this.ProductCategory);
}
  
}

