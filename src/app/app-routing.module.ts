import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { WishListComponent } from './pages/wish-list/wish-list.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { Error404Component } from './pages/error404/error404.component';
import { AccountComponent } from './pages/account/account.component';
import { CategoryComponent } from './pages/category/category.component';
import { CardComponent } from './component/card/card.component';
import { AddressComponent } from './pages/address/address.component';
import { canActivateGuard } from './guards/can-activate.guard';
import { canDeactivateGuard } from './guards/can-deactivate.guard';
import { AddaddressComponent } from './pages/add-address/add-address.component';
import { NewCartComponent } from './pages/new-cart/new-cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: NewCartComponent },
  { path: 'login', component: LoginComponent, canDeactivate: [canDeactivateGuard] },
  { path: 'signUp', component: SignUpComponent },
  { path: 'wish-list', component: WishListComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'error404', component: Error404Component },
  { path: 'account', component: AccountComponent, canActivate: [canActivateGuard] },
  { path: 'category', component: CategoryComponent },
  { path: 'category/:catID', component: CategoryComponent },
  { path: 'card', component: CardComponent },
  { path: 'Address', component: AddressComponent },
  { path: 'add-address', component: AddaddressComponent },
  { path: 'subcategory/:id', component: ProductDetailsComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
