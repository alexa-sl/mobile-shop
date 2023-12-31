import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import {QuillModule} from "ngx-quill";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./shared/auth.interceptor";
import { ProductComponent } from './product/product.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CartPageComponent,
    MainPageComponent,
    ProductPageComponent,
    MainLayoutComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    QuillModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
