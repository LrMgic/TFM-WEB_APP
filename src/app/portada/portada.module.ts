import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LacervesaComponent } from './Components/lacervesa/lacervesa.component';
import { LafabricaComponent } from './Components/lafabrica/lafabrica.component';
import { LempresaComponent } from './Components/lempresa/lempresa.component';
import { NoticiesComponent } from './Components/noticies/noticies.component';
import { SeguimentComponent } from './Components/seguiment/seguiment.component';
import { PortadaRoutingModule } from './portada-routing.module';

@NgModule({
  declarations: [
    NoticiesComponent,
    LempresaComponent,
    LafabricaComponent,
    LacervesaComponent,
    SeguimentComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, PortadaRoutingModule],
})
export class PortadaModule {}
