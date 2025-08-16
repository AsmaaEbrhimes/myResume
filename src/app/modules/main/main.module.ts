import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { MenueComponent } from './menue/menue.component';
import { PersonalprofileComponent } from './personalprofile/personalprofile.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { FadeanmationDirective } from '../../core/directive/fadeanmation.directive';
import { CoreModule } from '../../core/core.module';
import { StatictsComponent } from './staticts/staticts.component';

@NgModule({
  declarations: [
    MainComponent,
    MenueComponent,
    PersonalprofileComponent,
    AboutComponent,
    ResumeComponent,
    ScrollTopComponent,
    DashbordComponent,
    StatictsComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    CoreModule
  ]
})
export class MainModule { }
