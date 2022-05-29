import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-ticket',
  templateUrl: './home-ticket.page.html',
  styleUrls: ['./home-ticket.page.scss'],
})

export class HomeTicketPage implements OnInit {
  datas = [
    { img: 'assets/photo/car.jpg', title: 'จองรถราคาพิเศษ', description: 'มีสาขาทั่วประเทศ โทร 0968745872'},
    { img: 'assets/photo/plane.jpg', title: 'บินในประเทศราคาประหยัด', description: 'มีส่วนลดใช้ได้กับทุกสายการบินในประเทศ'},
    { img: 'assets/photo/hotel.jpg', title: 'ตั๋วโรงแรมสุดคุ้ม', description: 'มาคู่รับส่วนลดเป็นพิเศษ'},
    { img: 'assets/photo/ticket.jpg', title: '5 แพ๊กเกจราคาถูก', description: 'เที่ยวทั่วไทยไปไหนก็สบายกระเป๋า'},
];

  constructor() {
   }

  ngOnInit() {
  }

}
