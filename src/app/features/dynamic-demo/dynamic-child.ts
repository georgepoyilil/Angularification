import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-child',
  standalone: true,
  template: `<p>⚡ I am a dynamically loaded component!</p>`
})
export class DynamicChild {}
