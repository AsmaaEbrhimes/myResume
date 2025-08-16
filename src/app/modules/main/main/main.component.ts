import { Component, ViewChild } from '@angular/core';
import { MenueComponent } from '../menue/menue.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  collapsed = true;
  @ViewChild(MenueComponent) menueComp!: any;


  OnToggleEvent(isCollapsed: boolean) {
    this.collapsed = isCollapsed;
  }

  onOpenMenue(event: boolean) {
    this.menueComp.toggleMenu();
  }
}
