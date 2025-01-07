import { Component, OnChanges, OnInit } from '@angular/core'
import { Product } from '../product.model'
import { ProductsService } from '../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit,OnChanges{
  products: Product[] = []; 

  constructor(private productsService: ProductsService) { } 

  ngOnInit(): void {
    this.fetchProducts()
  }

  ngOnChanges(): void {
    this.fetchProducts();
  }

  fetchProducts(){
    this.productsService.getAllProducts()
    .subscribe(products=>{
      this.products=products;
    })
  }

  clickProduct(id:number){
    console.log('product: ',id)
  }
}
