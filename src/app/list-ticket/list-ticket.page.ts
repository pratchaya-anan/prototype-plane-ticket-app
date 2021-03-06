import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.page.html',
  styleUrls: ['./list-ticket.page.scss'],
})
export class ListTicketPage implements OnInit {
  tickets = [
    { img: 'assets/photo/air.png', go: 'KKC', to: 'BKK', gtime: '13:05', ttime: '14:35', time: '1h30m', price: '458 THB'},
    { img: 'assets/photo/nok.jpg', go: 'LPT', to: 'HGN', gtime: '15:00', ttime: '16:30', time: '1h30m', price: '493 THB'},
    { img: 'assets/photo/tla.png', go: 'ROI', to: 'PHS', gtime: '19:45', ttime: '14:40', time: '1h35m', price: '479 THB'},
    { img: 'assets/photo/tsm.jpg', go: 'MOQ', to: 'PRH', gtime: '15:00', ttime: '21:10', time: '1h25m', price: '496 THB'},
];

  constructor() { }

  ngOnInit() {
  }

}
