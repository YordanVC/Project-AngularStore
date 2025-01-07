import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit,AfterViewInit{
  mySwiper?: Swiper;

  constructor(@Inject(PLATFORM_ID) private platformId: object,private router:Router) {}
  
  ngOnInit(): void {
    
  }
  
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.mySwiper = new Swiper('.swiper-container');
    }
  }

  Comprar(): void {
    this.router.navigate(['/products']);
  }
}
