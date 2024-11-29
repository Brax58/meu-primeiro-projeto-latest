import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NewComponent],
  template: `
    <router-outlet/>
    <h1>Dedejhones</h1>
    <div class="theme-dark">
      <app-new-component/>
    </div>
  `,
})
export class AppComponent {}
