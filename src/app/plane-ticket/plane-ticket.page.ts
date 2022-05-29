import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plane-ticket',
  templateUrl: './plane-ticket.page.html',
  styleUrls: ['./plane-ticket.page.scss'],
})
export class PlaneTicketPage implements OnInit {
  tickets = [
    { img: 'assets/photo/plane.jpg', title: 'จองหนึ่งทีเที่ยวถึงปีหน้า', description: 'โปรเฉพาะเดือนพฤษจิกายน'},
    { img: 'assets/photo/plane2.jpg', title: 'บินทุกที่ดอกเบี้ย 0.5 บาท', description: 'สามารถผ่อนได้สูงสุด 6 เดือน'},
    { img: 'assets/photo/plane3.jpg', title: 'เดินทางเป็นคู่ราคาถูกกว่า', description: 'ราคาเริ่มต้นเพียง 2,550 บาท/ท่าน'},
    { img: 'assets/photo/plane4.jpg', title: 'เดินทางกับการบินไทย', description: 'รับเคริตเงินคืนสูงสุด 5,000 บาท'},
];

  constructor() { }

  ngOnInit() {
  }

}
