import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path:'',
loadChildren:() => (import('./home/home.module')
.then (m => m.HomeModule))
},
{ 
  path:'signup',
  loadChildren:() => (import('../app/signup/signup.module')
  .then (m => m.SignupModule))},
  { path:'login',
  loadChildren:() => (import('../app/login/login.module')
  .then (m => m.LoginModule))
}, 
{ path:'dashboard',
loadChildren:() => (import('./dashboard/dashboard.module')
.then (m => m.DashboardModule))
},
{ path:'user',
loadChildren:() => (import('./user/user.module')
.then (m => m.UserModule))
},
{ path:'product',
loadChildren:() => (import('./product/product.module')
.then (m => m.ProductModule))
},
{ path:'profile',
loadChildren:() => (import('./profile/profile.module')
.then (m => m.ProfileModule))
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
