import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  producto: Product;

  constructor(private productosService: ProductosService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      params => {
        let id = params.get('id');
        this.getProduct(+id);
      }
    )
  }

  getProduct(id: number) {
    this.productosService.getProduct(id).subscribe(
      producto => this.producto = producto
    )
  }

  guardar(formulario: NgForm): void {
    if(formulario.valid) {
      if(formulario.dirty) {
        if(this.producto.id == 0) {
          //crear nuevo
          this.productosService.createProduct(this.producto).subscribe(
            () => {
              formulario.reset();
              this.router.navigate(['/productos']);
            }
          )
        } else {
          this.productosService.updateProduct(this.producto).subscribe(
            () => {
              formulario.reset();
              this.router.navigate(['/productos']);
            }
          )
        }
      }
    }
  }

  deleteProduct(id: number, formulario: NgForm) {
    this.productosService.deleteProduct(id).subscribe(
      () => {
        formulario.reset();
        this.router.navigate(['/productos']);
      }
    )
  }

}
