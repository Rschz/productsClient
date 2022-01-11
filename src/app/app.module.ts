import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { FormProductComponent } from './products/form-product/form-product.component';
import { AsideListComponent } from './products/aside-list/aside-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    FormProductComponent,
    AsideListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, GraphQLModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
