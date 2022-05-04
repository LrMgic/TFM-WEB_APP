import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PortadaTreballadorComponent } from './Components/portada-treballador/portada-treballador.component';
import { TreballadorRoutingModule } from './treballador-routing.module';

@NgModule({
  declarations: [PortadaTreballadorComponent],
  imports: [CommonModule, ReactiveFormsModule, TreballadorRoutingModule],
})
export class TreballadorModule {}
