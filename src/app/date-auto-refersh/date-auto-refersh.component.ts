import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-auto-refersh',
  templateUrl: './date-auto-refersh.component.html',
  styleUrls: ['./date-auto-refersh.component.scss']
})
export class DateAutoRefershComponent implements OnInit {

  todaysAutoDatetime :string;
  number1 : number;
  number2 : number;
  sum:number;
  constructor() {
   // setInterval = reverseAjax , two arg 1) Time Handler and 2nd is Time Interval to call
    setInterval(()=>
    {
      let currentDateTime = new Date();
      this.todaysAutoDatetime = currentDateTime.toLocaleTimeString()+"";
    },1000);

   }//end constructor

  ngOnInit() {

  }

  doSomeThing()
  {
    console.log("it just clicked");
  }

  readData(event:any)
  {
    this.number1 = parseInt(event.target.value);
    console.log("read data : "+event+"  & value "+this.number1);
  }

  calculateSum(event:any)
  {
    this.number2 = parseInt(event.target.value);
    this.sum = this.number1+this.number2;
  }
}
