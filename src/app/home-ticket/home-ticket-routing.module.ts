import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeTicketPage } from './home-ticket.page';

const routes: Routes = [
  {
    path: '',
    component: HomeTicketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeTicketPageRoutingModule {}
