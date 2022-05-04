import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LacervesaComponent } from './Components/lacervesa/lacervesa.component';
import { LafabricaComponent } from './Components/lafabrica/lafabrica.component';
import { LempresaComponent } from './Components/lempresa/lempresa.component';
import { NoticiesComponent } from './Components/noticies/noticies.component';

const routes: Routes = [
  {
    path: 'home',
    component: NoticiesComponent,
  },
  {
    path: 'empresa',
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortadaRoutingModule {}
