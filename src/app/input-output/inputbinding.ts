import {Component} from '@angular/core';

@Component({
    selector:'app-stock',
    template:`<div class="text-left">
    <h1 class='bg-info well' >stock Exchange</h1>
    <input type='text' placeholder="enter Stock Holder" (change)="onInputEvent($event)">
    <br/>
    <order-processor [stockSymbol]="stock" quantity="100">
    </order-processor>
    </div>
   `
})
export class StockComponent{
    stock:string;
    onInputEvent({target}:any):void{
        console.log(target.value);
        this.stock=target.value;
    }
}
