import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeTicketPageRoutingModule } from './home-ticket-routing.module';

import { HomeTicketPage } from './home-ticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeTicketPageRoutingModule
  ],
  declarations: [HomeTicketPage]
})
export class HomeTicketPageModule {}
