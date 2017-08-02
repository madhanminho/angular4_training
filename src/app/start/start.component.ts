import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  styles:[
    `p{text-decoration:underline;}`
  ]
})
export class StartComponent implements OnInit {
time:any;
name:string="madhan";
buttonStatus1:boolean=false;
buttonStatus2:string='disabled';
titleStyle='red';
  constructor() { 
    window.setInterval(()=>{
      this.time=new Date().getSeconds()
    },1000)
  }

  ngOnInit() {
  }
  Save(event:any){
    console.log("saved");
    this.buttonStatus1=true;
  }

}
