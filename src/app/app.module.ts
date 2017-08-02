import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { BindingComponent } from './binding/binding.component';
import {NestedComponent} from "./binding/nested.component";
import {DebugComponent} from "./debug/debug.component";
import {IOModule} from "./input-output/inputoutput.module";
@NgModule({
  declarations: [
    AppComponent,
    StartComponent,BindingComponent,NestedComponent,DebugComponent
  ],
  imports: [
    BrowserModule,FormsModule,IOModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
