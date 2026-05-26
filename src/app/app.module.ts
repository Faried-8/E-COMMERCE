import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AccountComponent } from './pages/account/account.component';
import { WishListComponent } from './pages/wish-list/wish-list.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CategoryComponent } from './pages/category/category.component';
import { Error404Component } from './pages/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { TopBannerComponent } from './builtIn/top-banner/top-banner.component';
import { NavbarComponent } from './builtIn/navbar/navbar.component';
import { FooterSectionComponent } from './builtIn/footer-section/footer-section.component';
import { CardComponent } from './component/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule } from '@angular/router';
import { AddressComponent } from './pages/address/address.component';
import { loginInterceptor } from './interceptor/login.interceptor';
import { addressInterceptor } from './interceptor/address.interceptor';
import { CommonModule } from '@angular/common';
import { SideBarAddressComponent } from './builtIn/side-bar-address/side-bar-address.component';
import { NavbarSignLogComponent } from './builtIn/navbar-sign-log/navbar-sign-log.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NewCartComponent } from './pages/new-cart/new-cart.component';
import { AddaddressComponent } from './pages/add-address/add-address.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    AccountComponent,
    WishListComponent,
    ProductDetailsComponent,
    CategoryComponent,
    Error404Component,
    HomeComponent,
    TopBannerComponent,
    NavbarComponent,
    FooterSectionComponent,
    CardComponent,
    AddressComponent,
    AddaddressComponent,
    SideBarAddressComponent,
    NavbarSignLogComponent,
    NewCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule,
    RouterModule,
    CommonModule,
    MatSnackBarModule,
  ],
  providers: [
    provideHttpClient(
      withInterceptors([addressInterceptor, loginInterceptor])
    ),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
