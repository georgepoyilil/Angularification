import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDemo } from './dynamic-demo';

describe('DynamicDemo', () => {
  let component: DynamicDemo;
  let fixture: ComponentFixture<DynamicDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicDemo]
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
