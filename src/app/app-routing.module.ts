import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home-ticket',
    loadChildren: () => import('./home-ticket/home-ticket.module').then( m => m.HomeTicketPageModule)
  },
  {
    path: 'plane-ticket',
    loadChildren: () => import('./plane-ticket/plane-ticket.module').then( m => m.PlaneTicketPageModule)
  },
  {
    path: 'list-ticket',
    loadChildren: () => import('./list-ticket/list-ticket.module').then( m => m.ListTicketPageModule)
  },
  {
    path: 'check-ticket',
    loadChildren: () => import('./check-ticket/check-ticket.module').then( m => m.CheckTicketPageModule)
  },
  {
    path: 'checkout-ticket',
    loadChildren: () => import('./checkout-ticket/checkout-ticket.module').then( m => m.CheckoutTicketPageModule)
  },
  {
    path: 'confirm',
    loadChildren: () => import('./confirm/confirm.module').then( m => m.ConfirmPageModule)
  },
  {
    path: 'receipt-ticket',
    loadChildren: () => import('./receipt-ticket/receipt-ticket.module').then( m => m.ReceiptTicketPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
