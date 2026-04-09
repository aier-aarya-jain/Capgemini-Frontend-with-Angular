import { Component, signal } from '@angular/core';
import { FirstComp } from "../first-comp/first-comp";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FirstComp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Service_lifecyclehooks');
}
