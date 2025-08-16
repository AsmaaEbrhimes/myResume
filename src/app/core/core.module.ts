import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeanmationDirective } from './directive/fadeanmation.directive';



@NgModule({
  declarations: [
    FadeanmationDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[FadeanmationDirective]
})
export class CoreModule { }
