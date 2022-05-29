import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutTicketPage } from './checkout-ticket.page';

const routes: Routes = [
  {
    path: '',
    component: CheckoutTicketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class CheckoutTicketPageRoutingModule {}
