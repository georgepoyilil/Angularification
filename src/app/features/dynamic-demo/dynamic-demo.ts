import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicChild } from './dynamic-child';
import { CounterWidget } from '../../core/counter-widget/counter-widget';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-dynamic-demo',
  imports: [CounterWidget],
  templateUrl: './dynamic-demo.html',
  styleUrl: './dynamic-demo.scss'
})
export class DynamicDemo {
 @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  load() {
    this.container.clear();
    this.container.createComponent(DynamicChild);
  }
}
