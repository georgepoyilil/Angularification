import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SignalsDemo } from './signals-demo';

describe('SignalsDemo', () => {
  let component: SignalsDemo;
  let fixture: ComponentFixture<SignalsDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsDemo] // standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(SignalsDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ---------------- Signal Tests ----------------
  // it('should start with count = 0 and double = 0', () => {
  //   expect(component.count()).toBe(0);
  //   expect(component.double()).toBe(0);
  // });

  // it('should increment the count signal', () => {
  //   component.increment();
  //   expect(component.count()).toBe(1);
  //   expect(component.double()).toBe(2);
  // });

  // it('should decrement the count signal', () => {
  //   component.increment(); // go to 1
  //   component.decrement(); // back to 0
  //   expect(component.count()).toBe(0);
  //   expect(component.double()).toBe(0);
  // });

  // // ---------------- RxJS Interval Tests ----------------
  // it('should increase intervalValue over time', fakeAsync(() => {
  //   expect(component.intervalValue).toBe(0);

  //   tick(1000); // simulate 1s
  //   expect(component.intervalValue).toBe(1);

  //   tick(2000); // simulate 2s more
  //   expect(component.intervalValue).toBe(3);
  // }));

  // it('should stop updating intervalValue after ngOnDestroy', fakeAsync(() => {
  //   tick(1000);
  //   expect(component.intervalValue).toBe(1);

  //   component.ngOnDestroy(); // unsubscribe
  //   tick(2000); // move forward, but no updates should happen

  //   expect(component.intervalValue).toBe(1); // stays the same
  // }));
});
