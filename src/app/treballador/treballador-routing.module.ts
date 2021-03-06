import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactaComponent } from '../portada/Components/contacta/contacta.component';
import { MediaComponent } from './Components/media/media.component';
import { NavbarTreballadorComponent } from './Components/navbar-treballador/navbar-treballador.component';
import { PortadaTreballadorComponent } from './Components/portada-treballador/portada-treballador.component';
import { ProduccioComponent } from './Components/produccio/produccio.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarTreballadorComponent,
    children: [
      {
        path: '',
        component: PortadaTreballadorComponent,
      },
      {
        path: 'produccio',
        component: ProduccioComponent,
      },
      {
        path: 'media',
        component: MediaComponent,
      },
      {
        path: 'contacta',
        component: ContactaComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreballadorRoutingModule {}
