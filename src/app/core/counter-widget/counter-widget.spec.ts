import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterWidget } from './counter-widget';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { counterReducer } from '../../store/counter.reducer'; 
import { CounterEffects } from '../../store/counter.effects';  

describe('CounterWidget', () => {
  let component: CounterWidget;
  let fixture: ComponentFixture<CounterWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterWidget],
       providers: [
        provideStore({ counter: counterReducer }),
        provideEffects([CounterEffects])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
