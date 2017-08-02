import {Component} from "@angular/core";

@Component({
    selector:'app-binding',
    templateUrl:'./binding.component.html'
})
export class BindingComponent{
    clicked:boolean=false;
    public Items:any=[
        {name:"Kendo UI"},
        {name:"Ext JS"},
        {name:"Angular JS"},
        {name:"Ember JS"}
    ];
    public clickedItem:any={name:""};
    onItemClicked(Item:any){        
      this.clickedItem=Item;
      this.clicked=true;
    }
}