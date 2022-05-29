import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaneTicketPage } from './plane-ticket.page';

const routes: Routes = [
  {
    path: '',
    component: PlaneTicketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaneTicketPageRoutingModule {}
