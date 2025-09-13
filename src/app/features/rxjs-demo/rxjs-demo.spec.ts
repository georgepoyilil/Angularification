import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsDemo } from './rxjs-demo';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { counterReducer } from '../../store/counter.reducer'; 
import { CounterEffects } from '../../store/counter.effects'; 

describe('RxjsDemo', () => {
  let component: RxjsDemo;
  let fixture: ComponentFixture<RxjsDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsDemo],
       providers: [
        provideStore({ counter: counterReducer }),
        provideEffects([CounterEffects])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
