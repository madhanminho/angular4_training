 import {Component} from  '@angular/core';
 @Component({
     selector:'app-debug',
     template:`
     <h3 >DEBUG app</h3>
     
     <button (click)="increment($event)" class='btn btn-warning'>Increment</button>
     <h4 class="well">
     {{counter}}
     </h4>
     `
 })
export class DebugComponent{
    counter:number;
    constructor(){
        this.counter=1;
    }
    increment(event:any){
        this.counter=this.counter+1;
        if(this.counter==3)
         this.counter=0;            
    }
}    