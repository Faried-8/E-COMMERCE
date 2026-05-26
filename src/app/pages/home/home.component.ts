import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { HomeService } from '../../services/home.service';
import { CarouselService } from '../../services/carousel.service';
import { ProductByCategoryService } from '../../services/product-by-category.service';

interface Subcategory {
  id: number;
  name: string;
  image: string;
  hasThird: number;
}

interface Category {
  id: number;
  name: string;
  image: string;
  subcategories: Subcategory[];
}

interface Category {
  id: number;
  name: string;
  image: string;
  category_data?: {
    category_name: string;
  };
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // API variables aligned with response data
  categories: Category[] = []; // List of categories from the API (e.g., "women" category)
  ListCategories: Category[] = []; // List of subcategories from the API
  topCategories: Category[] = [];  // Browse by Categories
  carouselImages: any[] = []; // Static carousel images (as defined in your code)

  // State variables for controlling UI interactions
  isSubmitted: boolean = false;
  isSidebarVisible: boolean = false;
  filteredSubcategories: Subcategory[] = []; // Holds subcategories of the selected category
  selectedCategoryId: number | null = null; // Holds the selected category ID
  // ProductCategory: any[] =[] 
  constructor(
    private categoryService: CategoryService,
    private homeService: HomeService,
    private carouselService: CarouselService,
    // private ProductByCategory: ProductByCategoryService
  ) {
    // this.ProductByCategory.GetProductByCategory().subscribe(res=>{
    //   // console.log(res)
    //   let ProductCategory = res.data
    //   console.log(ProductCategory);
      
    //   // this.testForm.controls.customer_first_name = res.data.customer_first_name
  
    //   // this.testForm.setValue(userData)
    // })
  }
  

  ngOnInit(): void {
    this.loadTopCategories();
    this.loadCategories();
    this.loadCategoriesList();
    this.loadCarouselImages();

  // console.log(this.topCategories); 
  }
  flag = true;
  
  // Browse By Category
  loadTopCategories(): void {
    this.homeService.getTopCategories().subscribe(
      (res: any) => {
        // console.log(res);
        
        this.topCategories = res.data || [];
        // console.log(this.topCategories);
      },
      (error) => {
        console.error('Error fetching top categories:', error);
      },() =>{
        this.flag=false
      }
    );
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe(
      (res: any) => {
        this.categories = res.data || [];
        // console.log(this.categories);
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  // Load list categories (categories with subcategories) from the API
  loadCategoriesList(): void {
    this.categoryService.getCategoriesList().subscribe(
      (res: any) => {
        this.ListCategories = res.data || [];
        // console.log('List Categories:', this.ListCategories);
      },
      (error) => {
        console.error('Error fetching ListCategories:', error);
      }
    );
  }

  // Load carousel images (static or from an API)
  loadCarouselImages(): void {
    // If you want to use API-based images, uncomment the service call below and comment the static data assignment
    // this.carouselService.getCarouselImages().subscribe(
    //   (res: any) => {
    //     this.carouselImages = res.data || [];
    //   },
    //   (error) => {
    //     console.error('Error fetching carousel images:', error);
    //   }
    // );

    // Static carousel images
    
    this.carouselImages = [
      {
        imageUrl: 'iPhone-14-Pro-Everything-You-Need-To-Know.jpg',
        title: 'iPhone 14 Pro',
        description: 'Everything you need to know about iPhone 14 Pro'
      },
      {
        imageUrl: 'watch-AliExpress.png',
        title: 'Smart Watch',
        description: 'Latest Smart Watches on AliExpress'
      },
      {
        imageUrl: 'new-ps5-advert-highlights-a-console-centered-around-the-games.jpg',
        title: 'PS5',
        description: 'New PS5 Games'
      },
      {
        imageUrl: 'i-phone-AliExpress.png',
        title: 'iPhone AliExpress',
        description: 'Exclusive iPhone offers on AliExpress'
      },
      {
        imageUrl: 'EarBuds-AliExpress.png',
        title: 'EarBuds',
        description: 'Best EarBuds available on AliExpress'
      }
    ];
  }

  // Method to handle category selection and toggle subcategory visibility
selectCategory(categoryId: number): void {
  // If the clicked category is the same as the selected category, toggle visibility
  if (this.selectedCategoryId === categoryId) {
    this.isSidebarVisible = !this.isSidebarVisible;
  } else {
    // If a new category is clicked, show its subcategories and update the selectedCategoryId
    this.selectedCategoryId = categoryId;
    this.isSidebarVisible = true; // Set sidebar visible
  }
  
}

  // Filter subcategories based on the selected category ID
  getSubcategoriesByCategoryId(categoryId: number): Subcategory[] {
    const selectedCategory = this.ListCategories.find((cat) => cat.id === categoryId);
    return selectedCategory ? selectedCategory.subcategories : [];
  }

  // 
  
}
