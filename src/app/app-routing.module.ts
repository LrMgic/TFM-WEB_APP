import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientGuard } from './client/Guards/client.guard';
import { ContactaComponent } from './portada/Components/contacta/contacta.component';
import { LacervesaComponent } from './portada/Components/lacervesa/lacervesa.component';
import { LafabricaComponent } from './portada/Components/lafabrica/lafabrica.component';
import { LempresaComponent } from './portada/Components/lempresa/lempresa.component';
import { NavbarComponent } from './portada/Components/navbar/navbar.component';
import { NoticiesComponent } from './portada/Components/noticies/noticies.component';
import { SeguimentComponent } from './portada/Components/seguiment/seguiment.component';
import { TreballadorGuard } from './treballador/Guards/treballador.guard';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: '',
        component: NoticiesComponent,
      },
      {
        path: 'noticies',
        component: NoticiesComponent,
      },
      {
        path: 'laEmpresa',
        component: LempresaComponent,
      },
      {
        path: 'laFabrica',
        component: LafabricaComponent,
      },
      {
        path: 'laCervesa',
        component: LacervesaComponent,
      },
      {
        path: 'seguiment',
        component: SeguimentComponent,
      },
      {
        path: 'contacta',
        component: ContactaComponent,
      },
      {
        path: '*',
        component: NoticiesComponent,
      },
    ],
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
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'ignore',
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
