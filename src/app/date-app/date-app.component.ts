import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-app',
  templateUrl: './date-app.component.html',
  styleUrls: ['./date-app.component.scss']
})
export class DateAppComponent implements OnInit {

  todayDate : string = new Date().toDateString();// variable date 

  person = {
    fname:"ramesh",
    lname:"kumar"
  }

  constructor() { }

  ngOnInit() {
  }

}


