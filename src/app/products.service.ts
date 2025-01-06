import { Injectable } from '@angular/core';
import{Product}from './product.model'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[]=[
    {
      id: '1',
      image: 'assets/images/camisaAzul.png',
      title: 'Camiseta',
      price: 20,
      description: 'una camisa azul'
    },
    {
      id: '2',
      image: 'assets/images/camisaCivil.png',
      title: 'Camiseta Guarida Civil',
      price: 20,
      description: 'una camisa de guardia civil'
    },
    {
      id: '3',
      image: 'assets/images/camisaAzul.png',
      title: 'Camiseta',
      price: 20,
      description: 'una camisa azul'
    },
    {
      id: '4',
      image: 'assets/images/camisaCivil.png',
      title: 'Camiseta Guarida Civil',
      price: 20,
      description: 'una camisa de guardia civil'
    },
    {
      id: '5',
      image: 'assets/images/camisaAzul.png',
      title: 'Camiseta',
      price: 20,
      description: 'una camisa azul'
    },
    {
      id: '6',
      image: 'assets/images/camisaCivil.png',
      title: 'Camiseta Guarida Civil',
      price: 20,
      description: 'una camisa de guardia civil'
    }
  ]
  constructor() { }

  getAllProdcuts(){
    return this.products;
  }

  getProduct(id: string){
    return this.products.find(item=>id===item.id);
  }
}
