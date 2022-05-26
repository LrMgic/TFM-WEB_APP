import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './Components/client/client.component';
import { EconomiaClientComponent } from './Components/economia-client/economia-client.component';
import { EspaiClientComponent } from './Components/espai-client/espai-client.component';
import { EspaiPersonalComponent } from './Components/espai-personal/espai-personal.component';
import { NavbarClientComponent } from './Components/navbar-client/navbar-client.component';

@NgModule({
  declarations: [
    ClientComponent,
    EspaiClientComponent,
    NavbarClientComponent,
    EspaiPersonalComponent,
    EconomiaClientComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, ClientRoutingModule],
})
export class ClientModule {}
