import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFadeanmation]'
})
export class FadeanmationDirective {

  constructor(private el: ElementRef) {}
  @Input() appFadeanmation!: string;

  private isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const element = this.el.nativeElement;
    const rect = element.getBoundingClientRect();

    const inView = rect.top < window.innerHeight && rect.bottom > 0;

    if (inView && !this.isVisible) {
      element.classList.remove(this.appFadeanmation);
      void element.offsetWidth;
      element.classList.add('animate__animated', this.appFadeanmation);
      this.isVisible = true;
    }
    else if (!inView) {
      this.isVisible = false;
    }
  }
}
