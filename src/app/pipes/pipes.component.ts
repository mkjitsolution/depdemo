import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  username:string = 'Ramesh';
  companyName:string = 'times group'

  units : number = 15648;
  cost : number = 3600;

  todayDate : Date = new Date();

  student = {name:'ramesh',marks:450,subject:"computers"};

  profit = 15; //15%

  constructor() { }

  ngOnInit() {
  }

}
