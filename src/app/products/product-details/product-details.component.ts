import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  producto: Product;

  constructor(private productosService: ProductosService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getProduct(+id);


  }

  getProduct(id: number) {
    this.productosService.getProduct(id).subscribe(
      data => this.producto = data
    );
  }

}
