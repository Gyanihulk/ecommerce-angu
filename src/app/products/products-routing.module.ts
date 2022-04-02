import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductDateComponent } from './view-product-date/view-product-date.component';
import { ViewProductCategoryComponent } from './view-product-category/view-product-category.component';
const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'view-product/:id', component:ViewProductComponent },
  { path: 'list-product', component:ViewAllProductComponent },
  { path: 'search-cat', component:ViewProductDateComponent },
  { path: 'search-date', component:ViewProductCategoryComponent },
  { path: `update-product/:id`, component:UpdateProductComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
