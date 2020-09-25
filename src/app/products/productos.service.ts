import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable, of } from  'rxjs';
import { tap } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  private urlApi = 'http://localhost:8080/api/v1/products';

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.urlApi).pipe(
      tap( result => console.log('Result: ' + JSON.stringify(result)))
    )
  }

  getProduct(id: number): Observable<Product> {
    if(id === 0) {
      return of(this.initializeProduct())
    }


    const url = this.urlApi + `/${id}`;
    return this.http.get<Product>(url);
  }

  initializeProduct(): Product {
    return {
      id: 0,
      productName: null,
      productCode: null,
      price: null,
      description: null,
      starRating: null,
      imageUrl: null,
      releaseDate: null
    }
  }

  updateProduct(product: Product): Observable<Product> {
    const url = `${this.urlApi}/${product.id}`
    return this.http.put<Product>(url, product);
  }

  deleteProduct(id: number): Observable<void> {
    const url = this.urlApi + `/${id}`;
    return this.http.delete<void>(url);
  }

  createProduct(product: Product ): Observable<Product> {

    return this.http.post<Product>(this.urlApi, product);
  }
}
