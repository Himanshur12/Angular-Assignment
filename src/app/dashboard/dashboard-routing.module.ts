import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
  path:'',component:DashboardComponent
  },
  {
  path:'',component:HeaderComponent
},{
  path:'',component:MainComponent
},
{
  path:'',component:FooterComponent
},
{
  path:'',component:ProfileComponent
}]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
