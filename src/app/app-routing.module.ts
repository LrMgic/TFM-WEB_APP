import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientGuard } from './client/Guards/client.guard';
import { TreballadorGuard } from './treballador/Guards/treballador.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'portada/home',
    pathMatch: 'full',
  },
  {
    path: 'portada',
    loadChildren: () =>
      import('./portada/portada.module').then((m) => m.PortadaModule),
    outlet: 'navbarPortada',
  },
  {
    path: 'client',
    loadChildren: () =>
      import('./client/client.module').then((m) => m.ClientModule),
    canActivate: [ClientGuard],
  },
  {
    path: 'treballador',
    loadChildren: () =>
      import('./treballador/treballador.module').then(
        (m) => m.TreballadorModule
      ),
    canActivate: [TreballadorGuard],
  },
  { path: '**', redirectTo: 'portada/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
