import { Component, computed, signal } from '@angular/core';
import { interval, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-signals-demo',
  imports: [],
  templateUrl: './signals-demo.html',
  styleUrl: './signals-demo.scss'
})
export class SignalsDemo {

  // ----------------- Signals -----------------
  count = signal(0);
  double = computed(() => this.count() * 2);

  // ----------------- RxJS -----------------
  intervalValue = 0;
  rxjsSubscription!: Subscription;

  ngOnInit() {
    // RxJS interval example
    this.rxjsSubscription = interval(1000)
      .pipe(map(val => val + 1))
      .subscribe(val => this.intervalValue = val);
  }

  ngOnDestroy() {
    this.rxjsSubscription.unsubscribe();
  }

  increment() {
    this.count.update(c => c + 1);
  }

  decrement() {
    this.count.update(c => c - 1);
  }

}
