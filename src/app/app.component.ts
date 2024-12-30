import { Component } from '@angular/core';
import{ Product }from './product.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'platzi-store';

  items=['yordan','maria','andy']

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
    }
  ]

  addItem(){
    this.items.push('nuevo Item');
  }

  deleteItem(index: number){
    this.items.splice(index,1);
  }
}
