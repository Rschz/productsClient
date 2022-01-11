import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  categories: any[] = [];
  constructor(private apollo: Apollo) {}
}
