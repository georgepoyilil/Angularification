// src/app/state/counter.effects.ts
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { decrement, increment } from './counter.actions';
import { tap, delay } from 'rxjs/operators';

@Injectable()
export class CounterEffects {
  // declare property, do not initialize it here
  logIncrement$;
  logDecrement$;
  constructor(private readonly actions$: Actions) {
    // assign the effect in the constructor AFTER actions$ is injected
    this.logIncrement$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(increment),
          delay(500),
          tap(() => console.log('Increment action dispatched!'))
        ),
      { dispatch: false }
    );

     // Decrement effect
    this.logDecrement$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(decrement),
          delay(500),
          tap(() => console.log('Decrement action dispatched!'))
        ),
      { dispatch: false }
    );
  }
}
