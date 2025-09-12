import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-widget',
  imports: [AsyncPipe],
  templateUrl: './counter-widget.html',
  styleUrl: './counter-widget.scss'
})
export class CounterWidget {
count$;

  constructor(private readonly store: Store<{ counter: number }>) {
    this.count$ = this.store.pipe(select(state => state.counter));
  }

}
