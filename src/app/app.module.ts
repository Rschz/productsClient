import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { FormProductComponent } from './products/form-product/form-product.component';
import { AsideListComponent } from './products/aside-list/aside-list.component';
import { FormsModule, FormBuilder, NgControl } from '@angular/forms';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    FormProductComponent,
    AsideListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ProductsService, FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule {}
