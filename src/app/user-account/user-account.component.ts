import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {

   userAccountInfo = {
    username : 'ashish',
    status : 'prime-india',
    address : [
      'D1A-74 Janak puri ,New Delhi , India',
      'SP-12, Jhandewalan , Karol Bagh , New Delhi , India'
    ],
    phoneNumber : 9654144814,
    bankInfo : 'ICICI Bank , Account No : 123'
  }

  @Input("foo") headerInfo:string;

  constructor() { }

  ngOnInit() {
  }

}
