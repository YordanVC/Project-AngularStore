import { Component } from '@angular/core'
import { Product } from '../product.model'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
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
  clickProduct(id:number){
    console.log('product: ',id)
  }
}
