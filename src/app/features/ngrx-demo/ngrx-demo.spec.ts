import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxDemo } from './ngrx-demo';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { counterReducer } from '../../store/counter.reducer'; 
import { CounterEffects } from '../../store/counter.effects'; 

describe('NgrxDemo', () => {
  let component: NgrxDemo;
  let fixture: ComponentFixture<NgrxDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxDemo],
        providers: [
        provideStore({ counter: counterReducer }),
        provideEffects([CounterEffects])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
