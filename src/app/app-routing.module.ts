import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { FormProductComponent } from './products/form-product/form-product.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      { path: 'add', component: FormProductComponent },
      { path: ':id/:cat', component: FormProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
