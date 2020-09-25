import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable } from  'rxjs';
import { tap } from 'rxjs/operators';

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
    const url = this.urlApi + `/${id}`;
    return this.http.get<Product>(url);
  }

  updateProduct(product: Product): Observable<Product> {
    const url = `${this.urlApi}/${product.id}`
    return this.http.put<Product>(url, product);
  }

  deleteProduct(id: number): Observable<void> {
    const url = this.urlApi + `/${id}`;
    return this.http.delete<void>(url);
  }
}
