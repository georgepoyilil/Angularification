import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicChild } from './dynamic-child';

@Component({
  selector: 'app-dynamic-demo',
  imports: [],
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
