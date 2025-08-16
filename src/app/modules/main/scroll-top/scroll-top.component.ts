import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrl: './scroll-top.component.scss'
})
export class ScrollTopComponent {
    showButton = false; // علشان نتحكم في ظهور الأيقونة

scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // يعمل حركة ناعمة
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    this.showButton = scrollY > 200; 
  }
}
