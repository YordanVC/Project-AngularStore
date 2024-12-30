import {Component} from '@angular/core'
import{Product} from '../product.model'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})
export class ProductComponent{
    product: Product={
        id: '1',
        image: 'assets/images/camisaAzul.png',
        title: 'Camiseta',
        price: 20,
        description: 'una camisa azul'
    }
}