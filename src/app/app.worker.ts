/// <reference lib="webworker" />

import { PrimeCalculator } from './app.prime';

addEventListener('message', ({ data }) => {
   console.log(`worker response to ${data}`);
   const response = PrimeCalculator.findNthPrimeNumber(parseInt(data));
   postMessage(response);
});