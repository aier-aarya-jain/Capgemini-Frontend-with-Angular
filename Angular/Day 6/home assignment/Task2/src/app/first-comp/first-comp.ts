import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-comp.html',
  styleUrls: ['./first-comp.css'],
})
export class FirstComp {
  viewType: string = 'table'; // default view

  students = [
    { name: 'Abhinav', roll: 1, branch: 'AI/ML' },
    { name: 'Ravi', roll: 2, branch: 'CSE' },
    { name: 'Neha', roll: 3, branch: 'IT' }
  ];

  changeView(view: string) {
    this.viewType = view;
  }
}
