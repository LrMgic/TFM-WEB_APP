import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactaComponent } from '../portada/Components/contacta/contacta.component';
import { NoticiesComponent } from '../portada/Components/noticies/noticies.component';
import { SeguimentComponent } from '../portada/Components/seguiment/seguiment.component';
import { ClientComponent } from './Components/client/client.component';
import { EconomiaClientComponent } from './Components/economia-client/economia-client.component';
import { EspaiClientComponent } from './Components/espai-client/espai-client.component';
import { EspaiPersonalComponent } from './Components/espai-personal/espai-personal.component';
import { NavbarClientComponent } from './Components/navbar-client/navbar-client.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarClientComponent,
    children: [
      {
        path: '',
        component: ClientComponent,
      },
      {
        path: 'economiaClient',
        component: EconomiaClientComponent,
      },
      {
        path: 'espaiPersonal',
        component: EspaiPersonalComponent,
      },
      {
        path: 'espaiClient',
        component: EspaiClientComponent,
      },
      {
        path: 'seguiment',
        component: SeguimentComponent,
      },
      {
        path: 'contacta',
        component: ContactaComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
