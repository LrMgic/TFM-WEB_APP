import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientComponent } from './Components/client/client.component';
import { ClientRoutingModule } from './client-routing.module';
import { EspaiClientComponent } from './Components/espai-client/espai-client.component';

@NgModule({
  declarations: [ClientComponent, EspaiClientComponent],
  imports: [CommonModule, ReactiveFormsModule, ClientRoutingModule],
})
export class ClientModule {}
