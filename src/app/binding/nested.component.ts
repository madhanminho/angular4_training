 import {Component} from  '@angular/core';
 @Component({
     selector:'latest-news',
     template:`
     <h3 class='well'>Template binding (nested component)</h3>
     <br/>
     <button (click)="flag =!flag" class='btn btn-success'>Latest news</button>
     <h2>
     <span *ngIf="flag">
     <div style='background:orange'>Ang 4.0 is out now!!!</div>
     </span>
     </h2>
     `
 })
    
    export class NestedComponent{
        flag: boolean=false;
    }