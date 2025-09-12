import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxDemo } from './ngrx-demo';

describe('NgrxDemo', () => {
  let component: NgrxDemo;
  let fixture: ComponentFixture<NgrxDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxDemo]
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
