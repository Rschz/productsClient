import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css'],
})
export class FormProductComponent implements OnInit {
  indice: number = 1;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {}
}
