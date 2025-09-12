import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterWidget } from './counter-widget';

describe('CounterWidget', () => {
  let component: CounterWidget;
  let fixture: ComponentFixture<CounterWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterWidget]
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
