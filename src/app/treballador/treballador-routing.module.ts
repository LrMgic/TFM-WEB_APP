import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarTreballadorComponent } from './Components/navbar-treballador/navbar-treballador.component';
import { PortadaTreballadorComponent } from './Components/portada-treballador/portada-treballador.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarTreballadorComponent,
    children: [
      {
        path: '',
        component: PortadaTreballadorComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreballadorRoutingModule {}
