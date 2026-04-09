import { Component } from '@angular/core';
import { ChildComp } from "./child-comp/child-comp";

@Component({
  selector: 'app-first-comp',
  imports: [ChildComp],
  templateUrl: './first-comp.html',
  styleUrl: './first-comp.css',
})
export class FirstComp {
  name: string = 'This is a name given fromm Parent';
  d: string = '';
  handleData(data: string){
    this.d = data;  
    console.log('Data received from child: ', this.d);
  }
}
