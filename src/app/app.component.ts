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
  prime30000 : number = 0;

  find10thPrimeNumber() {
      this.prime10 = PrimeCalculator.findNthPrimeNumber(10);
  }

  find30000thPrimeNumber() {
    this.prime30000 = PrimeCalculator.findNthPrimeNumber(30000);
    // if (typeof Worker !== 'undefined') {
    //   // Create a new worker
    //   console.log('creating new web worker');
    //   const worker = new Worker(new URL('./app.worker', import.meta.url));
    //   worker.onmessage = ({ data }) => {
    //     console.log('data recieved onmessage', data);
    //     this.prime30000 = data;
    //     this.prime30000processing = false;
    //     worker.terminate();
    //   };
    //   worker.postMessage(30000);
    // } else {
    //   // Web Workers are not supported in this environment.
    //   // You should add a fallback so that your program still executes correctly.
    // }
  }
}
