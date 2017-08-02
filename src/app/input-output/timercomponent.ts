import {Component} from '@angular/core';

@Component({
    selector:'timer-comp',
    template:`<h4 class="text-center" style='background:black;color:white;'>{{time}}</h4>
    `
})
export class TimerComponent{
   time:any;
  constructor(){
      window.setInterval(()=>{this.time=new Date().toString();}
    ,1000);
  }
}
