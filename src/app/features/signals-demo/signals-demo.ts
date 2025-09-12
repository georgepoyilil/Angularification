import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals-demo',
  imports: [],
  templateUrl: './signals-demo.html',
  styleUrl: './signals-demo.scss'
})
export class SignalsDemo {

   count = signal(0);

  increment() {
    this.count.update(v => v + 1);
  }

  decrement() {
    this.count.update(v => v - 1);
  }

}
