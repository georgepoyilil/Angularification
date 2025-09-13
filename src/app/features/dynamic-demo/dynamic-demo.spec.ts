import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDemo } from './dynamic-demo';

import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { counterReducer } from '../../store/counter.reducer'; 
import { CounterEffects } from '../../store/counter.effects'; 

describe('DynamicDemo', () => {
  let component: DynamicDemo;
  let fixture: ComponentFixture<DynamicDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicDemo],
      providers: [
        provideStore({ counter: counterReducer }),
        provideEffects([CounterEffects])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
