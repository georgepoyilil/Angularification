import { Routes } from '@angular/router';
import { SignalsDemo } from './features/signals-demo/signals-demo';
import { RxjsDemo } from './features/rxjs-demo/rxjs-demo';
import { DynamicDemo } from './features/dynamic-demo/dynamic-demo';
import { NgrxDemo } from './features/ngrx-demo/ngrx-demo';

export const routes: Routes = [
  { path: '', redirectTo: 'signals', pathMatch: 'full' },
  { path: 'signals', component: SignalsDemo },
  { path: 'rxjs', component: RxjsDemo },
  { path: 'dynamic', component: DynamicDemo },
  { path: 'ngrx', component: NgrxDemo },
  { path: '**', redirectTo: 'signals' } // fallback
];
