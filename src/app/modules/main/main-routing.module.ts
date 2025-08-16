import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PersonalprofileComponent } from './personalprofile/personalprofile.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {path:'',component:MainComponent,
    // children:[
    //   {path:"",component:PersonalprofileComponent},
    //   {path:"",component:AboutComponent},
    //   {path:"",component:ResumeComponent},
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
