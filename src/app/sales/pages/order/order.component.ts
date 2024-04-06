import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'  
})
export class OrderComponent  {
  caps:boolean=true;  
  orderBy:string= '';
  heroes:Hero[]=[
    {
      name:'Superman',
      fly:true,
      color:Color.blue
    },
    {
      name:'Batman',
      fly:false,
      color:Color.black
    },
    {
      name:'Robin',
      fly:false,
      color:Color.green
    },
    {
      name:'Daredevil',
      fly:false,
      color:Color.red
    },
    {
      name:'Green Lantern',
      fly:true,
      color:Color.green
    }
  ]
  toggleCaps()
  {
    this.caps=!this.caps;
  }
  changeOrder(value:string){
    this.orderBy=value;
  }
}
