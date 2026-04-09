import { Component, inject, OnInit } from '@angular/core';
import { Test } from '../test';

@Component({
  selector: 'app-first-comp',
  standalone: true,
  imports: [],
  templateUrl: './first-comp.html',
  styleUrl: './first-comp.css',
  providers: [Test]
})
export class FirstComp implements OnInit {

  test = inject(Test);
  nameArr: string[] = this.test.namesArr;

  addName(name: string) {
    this.nameArr.push(name);
  }

  ngOnInit() {
    this.test.namesArr = this.nameArr;
  }

}
