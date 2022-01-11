import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';

const GET_PRODUCTS = gql`
  {
    products {
      id
      category
      description
    }
  }
`;

@Component({
  selector: 'app-aside-list',
  templateUrl: './aside-list.component.html',
  styleUrls: ['./aside-list.component.css'],
})
export class AsideListComponent implements OnInit {
  products: any = [];
  productId: number = 0;
  showBtnNewAdd: boolean = true;

  constructor(private apollo: Apollo, private router: Router) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery<any>({
        query: GET_PRODUCTS,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        let { products } = data;
        this.products = products;
      });
  }

  showId() {
    console.log();
  }

  removebtn() {
    this.showBtnNewAdd = false;
  }
}
