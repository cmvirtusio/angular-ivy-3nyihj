import { Component, Input, OnInit } from '@angular/core';
import { FinancialDataResourceService } from '../services/financial-data-resource.service';

@Component({
  selector: 'app-growth10k',
  templateUrl: './growth10k.component.html',
  styleUrls: ['./growth10k.component.css']
})
export class Growth10kComponent implements OnInit {
  @Input() growthOf10Kinput;

  stockData;

  @Input() set latestTicker(data) {
    if (data) {
      this.getStockData(data);
    }
  }

  constructor(private financialDataResource: FinancialDataResourceService) { }

  ngOnInit(): void {
  }

  getStockData(ticker) {
    this.financialDataResource.getStockWeeklyData(ticker).subscribe(weeklyData => {
      this.stockData = weeklyData;
    })
  }

  growthOf10kChart(ticker: string, startDate: string) {
    // return an array of {date,price} objects where the earliest date will start with 10,000 as price
    // example
    // input (aapl, "2009-01-01")
    // output [{ date: "2009-01-05", price: 10000 },
    // { date: "2009-01-12", price: 10012.123 },
    // { date: "2009-01-19", price: 10311.543543 },
    // ...
    // { date: "2022-08-29", price: 34531.123 },
    // { date: "2022-09-05", price: 32412.123 }]
  }
}
