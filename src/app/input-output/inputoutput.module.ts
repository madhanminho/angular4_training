import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StockComponent} from './inputbinding';
import {TimerComponent} from './timercomponent';
import {OrderComponent} from './ordercomponent';
import {SMSComponent} from './smscomponent';
@NgModule({
    imports:[CommonModule],
    declarations:[StockComponent,OrderComponent,SMSComponent,TimerComponent],
    exports:[StockComponent,OrderComponent,SMSComponent,TimerComponent],
})
export class IOModule{

}