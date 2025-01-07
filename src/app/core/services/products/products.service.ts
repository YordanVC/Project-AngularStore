import { HttpClient} from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import{Product}from '../../../product.model'
import{environment} from './../../../enviroments/enviroment.dev'

@Injectable({
  providedIn: 'root'
})

export class ProductsService{

  constructor(
    private http:HttpClient
  ){}

  getAllProducts(){
    return this.http.get<Product[]>(environment.url_api_products);
  }

  getProduct(id: string){
    return this.http.get<Product>(`${environment.url_api_products}/${id}`);
  }
}
