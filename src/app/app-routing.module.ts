import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortadaComponent } from './Components/portada/portada.component';

const routes: Routes = [
  {
    path:'',
    component:PortadaComponent
  },
  {
    path:'home',
    component:PortadaComponent
  },
  // {
  //   path:'empresa',
  //   component:
  // },
  // {
  //   path:'quiSom',
  //   component:
  // },
  // {
  //   path:'eCommers',
  //   component:
  // },
  // {
  //   path:'elsPreus',
  //   component:
  // },
  // {
  //   path:'onSomE',
  //   component:
  // },
  // {
  //   path:'perqueUnirse',
  //   component:
  // },
  // {
  //   path:'contacta',
  //   component:
  // },
  // {
  //   path:'laFabrica',
  //   component:
  // },
  // {
  //   path:'onSomF',
  //   component:
  // },
  // {
  //   path:'elProces',
  //   component:
  // },
  // {
  //   path:'laCervesa',
  //   component:
  // },
  // {
  //   path: 'profile',
  //   component: ,
  //   canActivate: [AuthGuard],
  // },
  //   path: 'tasques',
  //   component: ,
  //   canActivate: [AuthGuard],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
