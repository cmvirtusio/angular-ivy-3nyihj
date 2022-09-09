import { Component, OnInit } from '@angular/core';
import { FinancialDataResourceService } from './services/financial-data-resource.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  private readonly DEFAULT_START_DATE = "2009-01-01"

  growthOf10Kinput = {
    startDate: this.DEFAULT_START_DATE,
    searchedTickers: []
  }

  latestTicker;

  constructor() { }

  ngOnInit(): void {
  }

  searchTicker(ticker: string) {
    this.latestTicker = ticker;
    this.growthOf10Kinput.searchedTickers.push(ticker);
  }

  joinedStringify(strArr) {
    return strArr.join(",")
  }

}
