import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortadaComponent } from './Components/portada/portada.component';

const routes: Routes = [
  {
    path:'',
    component:PortadaComponent
  },
  {
    path:'post/:variable',
    component:PortadaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
