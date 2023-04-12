import { Component } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent{
  images: any[]; 

  currentIndex = 0;

  constructor() {
    this.images = [
      { src: '../../assets/img/img1.jpg', alt: 'img1' },
      { src: '../../assets/img/img2.jpg', alt: 'img2' },
      { src: '../../assets/img/img3.jpg', alt: 'img3' },
    ];
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  ngOnInit() {
    setInterval(() => {
      this.nextImage();
    }, 5000);
  }
}







