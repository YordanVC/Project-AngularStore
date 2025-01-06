import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  images: string[]=[
    'assets/images/banner-1.jpg',
    'assets/images/banner-2.jpg'
  ]

  constructor(){}
}
