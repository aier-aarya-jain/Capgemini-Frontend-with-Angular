import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-first-comp',
  imports: [CommonModule],
  templateUrl: './first-comp.html',
  styleUrls: ['./first-comp.css'],
})
export class FirstComp {
  applyClass = false;
  applyStyle = false;

  arr: string[] = ['Item 1', 'Item 2', 'Item 3'];
  arr1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  shouldApplyClass() {
    this.applyClass = !this.applyClass;
  }

  shouldApply() {
    this.applyStyle = !this.applyStyle;
  }
}