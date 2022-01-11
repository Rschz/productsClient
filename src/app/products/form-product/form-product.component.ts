import { Component, OnInit } from '@angular/core';

import { Apollo, gql } from 'apollo-angular';

import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

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

const GET_FIELDS = (cat: string) => gql`
  {
    __type(name: "${cat}" ) {
      fields {
        name
        type {
          ofType {
            name
          }
        }
      }
    }
  }
`;

const GET_PRODUCT = (id: number) => gql`
  {
    __type(name: "${id}" ) {
      fields {
        name
        type {
          ofType {
            name
          }
        }
      }
    }
  }
`;

interface Field {
  name: string;
  type: string;
}

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css'],
})
export class FormProductComponent implements OnInit {
  categories: any[] = [];
  selectedCategory: string = 'Car';
  fields: Field[] = [];
  productId: number = 0;

  category: string = 'Car';

  constructor(private apollo: Apollo, private aRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.productId = this.aRoute.snapshot.params['id'];
    this.selectedCategory = this.aRoute.snapshot.params['cat'];

    this.apollo
      .watchQuery<any>({
        query: GET_PRODUCTS,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        const fields = data.__schema.mutationType.fields;
        this.categories = [
          ...new Set(fields.map((element: any) => element.args[0].name)),
        ];
      });
  }

  getCategory() {
    this.apollo
      .watchQuery<any>({
        query: GET_FIELDS(this.selectedCategory),
      })
      .valueChanges.subscribe(({ data, loading }) => {
        let fieldsObj: [] = data.__type.fields;

        this.fields = fieldsObj.map((el: any) => {
          let obj: Field;
          let name: string = el.name.toLowerCase();
          let type: string = el.type.ofType.name.toLowerCase();

          obj = {
            name,
            type: type === 'int' ? 'number' : type,
          };

          return obj;
        });

        this.getProduct(this.fields.map((e: any) => e.name));
      });
  }

  getProduct(id: any) {}
}
