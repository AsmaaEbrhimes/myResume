import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor() {}

  // @ViewChild('animatedDiv', { static: true }) animatedDiv!: ElementRef;

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   const element = this.animatedDiv.nativeElement;
  //   const rect = element.getBoundingClientRect();

  //   if (rect.top < window.innerHeight && rect.bottom > 0) {
  //     element.classList.remove('animate__slideInRight');
  //     void element.offsetWidth;
  //     element.classList.add('animate__animated', 'animate__slideInRight');
  //   }
  // }






}
