import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  imports: [],
  templateUrl: './child-comp.html',
  styleUrl: './child-comp.css',
})
export class ChildComp {
  @Input() 
  namegiven: string = '';

  @Output()
  customEvent = new EventEmitter<string>();

  sendData(){
    this.customEvent.emit('This is data from child to parent');
  }


}
