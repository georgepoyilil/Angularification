import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs-demo',
  imports: [],
  templateUrl: './rxjs-demo.html',
  styleUrl: './rxjs-demo.scss'
})
export class RxjsDemo {
  time = 0;
  sub: Subscription;

  constructor() {
    this.sub = interval(1000).subscribe(val => this.time = val);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
