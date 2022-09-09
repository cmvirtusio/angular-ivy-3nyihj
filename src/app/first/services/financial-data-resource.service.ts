import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { aaplStockdata, msftStockData } from './mockdata';

@Injectable({
  providedIn: 'root'
})
export class FinancialDataResourceService {

  constructor() { }

  getStockWeeklyData(stockTicker: string) {
    if (stockTicker === "msft") {
      return of(msftStockData).pipe(delay(300));
    }
    if (stockTicker === "error") {
      return of([]).pipe(delay(300))
    }
    return of(aaplStockdata).pipe(delay(300));
  }
}
