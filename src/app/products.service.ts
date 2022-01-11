import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  typesName: Observable<any> | undefined;
  constructor(private apollo: Apollo) {}
}
