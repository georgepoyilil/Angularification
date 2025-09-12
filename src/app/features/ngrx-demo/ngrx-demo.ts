import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { increment, decrement } from '../../store/counter.actions';
import { AsyncPipe } from '@angular/common';   // 👈 import AsyncPipe
import { Observable } from 'rxjs'; 
@Component({
  selector: 'app-ngrx-demo',
  imports: [AsyncPipe],
  templateUrl: './ngrx-demo.html',
  styleUrl: './ngrx-demo.scss'
})
export class NgrxDemo {
count$
  
constructor(private readonly store: Store<{ counter: number }>) {
 this.count$ = this.store.pipe(select(state => state.counter));  }
  
  inc() {
    this.store.dispatch(increment());
  }

  dec() {
    this.store.dispatch(decrement());
  }
}
