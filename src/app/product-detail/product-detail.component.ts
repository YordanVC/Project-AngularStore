import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Params} from '@angular/router'
import{ProductsService} from './../products.service'
import { Product } from '../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{

  product: Product | undefined;
  constructor(
    private route:ActivatedRoute,
    private productsService: ProductsService
  ){}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      const id= params['id'];
      this.product=this.productsService.getProduct(id);
    });
  }
}
