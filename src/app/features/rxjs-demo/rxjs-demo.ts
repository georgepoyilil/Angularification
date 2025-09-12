import { Component, OnInit, OnDestroy } from '@angular/core';
import { 
  of, from, interval, timer, merge, concat, combineLatest, forkJoin, 
  Subject, BehaviorSubject, ReplaySubject 
} from 'rxjs';
import { 
  map, filter, take, takeWhile, first, last, scan, mapTo, buffer, tap, delay, finalize 
} from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs-demo',
  standalone: true,
  templateUrl: './rxjs-demo.html',
})
export class RxjsDemo implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  // Outputs
  creationOutput = '';
  transformationOutput = '';
  filterOutput = '';
  combinationOutput = '';
  utilityOutput = '';
  subjectOutput = '';

  ngOnInit() {
    this.creationOperatorsDemo();
    this.transformationOperatorsDemo();
    this.filterOperatorsDemo();
    this.combinationOperatorsDemo();
    this.utilityOperatorsDemo();
    this.subjectDemo();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  // ---------------- Creation Operators ----------------
  creationOperatorsDemo() {
    const sub1 = of(1, 2, 3).subscribe(val => this.creationOutput += val + ' ');
    const sub2 = from([4, 5, 6]).subscribe(val => this.creationOutput += val + ' ');
    const sub3 = timer(2000).subscribe(() => this.creationOutput += 'Timer ');
    this.subscriptions.push(sub1, sub2, sub3);
  }

  // ---------------- Transformation Operators ----------------
  transformationOperatorsDemo() {
    const sub = of(1, 2, 3).pipe(
      map(n => n * 10),
      scan((acc, val) => acc + val, 0)
    ).subscribe(val => this.transformationOutput += val + ' ');
    this.subscriptions.push(sub);
  }

  // ---------------- Filtering Operators ----------------
  filterOperatorsDemo() {
    const sub = from([1, 2, 3, 4, 5, 6]).pipe(
      filter(n => n % 2 === 0),
      take(2)
    ).subscribe(val => this.filterOutput += val + ' ');
    this.subscriptions.push(sub);
  }

  // ---------------- Combination Operators ----------------
  combinationOperatorsDemo() {
    const obs1 = of('A', 'B');
    const obs2 = of(1, 2);
    const sub = combineLatest([obs1, obs2]).subscribe(([a, b]) => this.combinationOutput += `${a}${b} `);
    this.subscriptions.push(sub);
  }

  // ---------------- Utility Operators ----------------
  utilityOperatorsDemo() {
    const sub = of('X').pipe(
      tap(v => console.log('Before delay:', v)),
      delay(500),
      finalize(() => console.log('Utility demo complete'))
    ).subscribe(val => this.utilityOutput += val + ' ');
    this.subscriptions.push(sub);
  }

  // ---------------- Subjects ----------------
  subjectDemo() {
    const subject = new Subject<number>();
    const behavior = new BehaviorSubject<number>(0);
    const replay = new ReplaySubject<number>(2);

    subject.subscribe(val => this.subjectOutput += `Subj:${val} `);
    behavior.subscribe(val => this.subjectOutput += `Beh:${val} `);
    replay.subscribe(val => this.subjectOutput += `Rep:${val} `);

    subject.next(1); 
    subject.next(2);
    behavior.next(10);
    behavior.next(20);
    replay.next(100);
    replay.next(200);
  }
}
