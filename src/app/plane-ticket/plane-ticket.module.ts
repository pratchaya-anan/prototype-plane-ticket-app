import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaneTicketPageRoutingModule } from './plane-ticket-routing.module';

import { PlaneTicketPage } from './plane-ticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaneTicketPageRoutingModule
  ],
  declarations: [PlaneTicketPage]
})
export class PlaneTicketPageModule {}
