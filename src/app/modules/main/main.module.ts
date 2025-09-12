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
import { CoreModule } from '../../core/core.module';
import { StatictsComponent } from './staticts/staticts.component';
import { KnobModule } from 'primeng/knob';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ContactsUsComponent } from './contacts-us/contacts-us.component';
import { ChartModule } from 'primeng/chart';
import { ExperiensComponent } from './experiens/experiens.component';
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
    HeaderComponent,
    ContactsUsComponent,
    ExperiensComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    CoreModule,
    KnobModule,
    ReactiveFormsModule,
    FormsModule,
    ChartModule
  ]
})
export class MainModule { }
