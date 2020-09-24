import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productos: Product[];

  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.productosService.getProducts().subscribe(
      data => this.productos = data
    );
  }

}
