import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'products/edit/:id', component: ProductEditComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', redirectTo: 'products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
