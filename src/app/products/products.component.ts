import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  showBtnNewAdd: boolean = true;

  constructor(private aRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  removebtn() {
    this.showBtnNewAdd = false;
  }
}
