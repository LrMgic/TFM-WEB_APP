import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientComponent } from './Components/client/client.component';
import { ClientRoutingModule } from './client-routing.module';
import { EspaiClientComponent } from './Components/espai-client/espai-client.component';
import { NavbarClientComponent } from './Components/navbar-client/navbar-client.component';
import { EspaiPersonalComponent } from './Components/espai-personal/espai-personal.component';

@NgModule({
  declarations: [ClientComponent, EspaiClientComponent, NavbarClientComponent, EspaiPersonalComponent],
  imports: [CommonModule, ReactiveFormsModule, ClientRoutingModule],
})
export class ClientModule {}
