import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrl: './menue.component.scss',
})
export class MenueComponent implements OnInit {
  ngOnInit(): void {
    this.measureScreenWidth();
    this.DataMenue();
  }

  @Output() isCollapsed = new EventEmitter<boolean>();
  @Output() navigateSection = new EventEmitter<string>();
  isMenuCollapsed = true;
  screenwidth: boolean = false;
  arraymenue: any = [];

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this.isCollapsed.emit(this.isMenuCollapsed);
  }

  DataMenue() {
    this.arraymenue = [
      { title: 'Home', icon: 'fa-solid fa-house' },
      { title: 'About', icon: 'fa-solid fa-address-card' },
      { title: 'Resume', icon: 'fa-solid fa-file' },
      { title: 'Dashboard', icon: 'fa-solid fa-chart-line' },
      { title: 'Python', icon: 'fa-brands fa-python' },
    ];
  }

  navigateTo(title: string) {
    console.log('Navigating to:', title);
    this.navigateSection.emit(title);
    this.isMenuCollapsed = true;
    this.isCollapsed.emit(true);
  }

  @HostListener('window:resize')
  onResize(event: any) {
    this.measureScreenWidth();
  }

  measureScreenWidth() {
    const width = window.innerWidth;

    if (width >= 320 && width < 1200) {
      this.screenwidth = true;
    } else {
      this.screenwidth = false;
    }
  }
}
