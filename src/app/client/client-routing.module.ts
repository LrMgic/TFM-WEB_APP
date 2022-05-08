import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './Components/client/client.component';
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
        component: EspaiPersonalComponent,
      },
      {
        path: '',
        component: EspaiClientComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
