import {Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit} from '@angular/core'

import{Product} from '../product.model'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent {//implements OnChanges,OnInit{

    @Input() product?: Product;
    @Output() productClicked:EventEmitter<any>=new EventEmitter();

    constructor(){
        //console.log('1. constructor');
    }
    /*ngOnChanges(changes: SimpleChanges) {
        console.log('2. ngOnChanges');
        console.log(changes);
    }
    ngOnInit() {
        console.log('3. ngOnInit');
    }
    ngDoCheck() {
        console.log('4. ngDoCheck');
    }

    ngOnDestroy() {
        console.log('5. ngOnDestroy');
    }*/
   AgregarCarrito(){
    console.log('producto: ',this.product?.title, 'ha sido agregado al carrito');
    this.productClicked.emit(this.product?.id);
   }

}