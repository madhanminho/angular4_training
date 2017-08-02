import {Component,Input} from '@angular/core';

@Component({
    selector:'sms-text',
    template:`<h3 class='bg-info'>stock info form child sms component</h3>
    <h2 class="text-center text-warning container">sent SMS about {{stockSymbol}}</h2>`
})
export class SMSComponent{
   private _stockSymbol:string;
   @Input()
   set stockSymbol(value:string){
       this._stockSymbol=value;
   }
    get stockSymbol():string{
        return this._stockSymbol;
    }
}
