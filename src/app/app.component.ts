import { Component } from '@angular/core';
import { PrimeCalculator } from './app.prime';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-worker-sample';
  prime10 : number = 0;
  prime10000 : number = 0;

  find10thPrimeNumber() {
      this.prime10 = PrimeCalculator.findNthPrimeNumber(10);
  }

  find10000thPrimeNumber() {
    console.log('find10000thPrimeNumber');
    // this.prime10000 = PrimeCalculator.findNthPrimeNumber(40000);
    if (typeof Worker !== 'undefined') {
      // Create a new
      console.log('creating new web worker');
      const worker = new Worker('./app.worker', { type: 'module' });
      worker.onmessage = ({ data }) => {
        console.log('data', data);
        this.prime10000 = data;
        worker.terminate();
      };
      worker.postMessage(10000);
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }
}
