import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Granja El Retorno';
  
  ngOnInit() {
    function toggleMenu() {
      const menuToggle = document.querySelector('.menu-toggle');
      const menu = document.querySelector('header ul');
  
      if (menuToggle) {
        menuToggle.classList.toggle('active');
      }
      if (menu) {
        menu.classList.toggle('active');
      }
    }
  
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
      menuToggle.addEventListener('click', toggleMenu);
    }
  }
  
}