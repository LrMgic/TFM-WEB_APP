import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PortadaTreballadorComponent } from './Components/portada-treballador/portada-treballador.component';
import { TreballadorRoutingModule } from './treballador-routing.module';
import { NavbarTreballadorComponent } from './Components/navbar-treballador/navbar-treballador.component';

@NgModule({
  declarations: [PortadaTreballadorComponent, NavbarTreballadorComponent],
  imports: [CommonModule, ReactiveFormsModule, TreballadorRoutingModule],
})
export class TreballadorModule {}
