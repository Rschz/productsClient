import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductsService } from 'src/app/products.service';

const GET_PRODUCTS = gql`
  {
    __schema {
      mutationType {
        name
        fields {
          name
          args {
            name
          }
        }
      }
    }
  }
`;

@Component({
  selector: 'app-aside-list',
  templateUrl: './aside-list.component.html',
  styleUrls: ['./aside-list.component.css'],
})
export class AsideListComponent implements OnInit {
  categories: any = [];

  constructor(
    private apollo: Apollo,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery<any>({
        query: GET_PRODUCTS,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        console.log(loading);

        const fields = data.__schema.mutationType.fields;
        this.categories = [
          ...new Set(fields.map((element: any) => element.args[0].name)),
        ];
      });
  }
}
