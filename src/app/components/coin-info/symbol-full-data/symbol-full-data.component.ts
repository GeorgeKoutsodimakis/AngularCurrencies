import { Component, OnInit, Input, ViewChild, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Coin } from 'src/app/shared/Model/coin.model';
import { Currency } from 'src/app/shared/Model/currency.model';
import { keyframes } from '@angular/animations';
import { TabView, TabPanel } from 'primeng/tabview';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-symbol-full-data',
  templateUrl: './symbol-full-data.component.html',
  styleUrls: ['./symbol-full-data.component.css']
})
export class SymbolFullDataComponent implements OnInit, OnChanges {

  @Input() usdCurrency: Currency;
  _usdCurrency: Currency;
  @Input() eurCurrency: Currency;
  _eurCurrency: Currency;
  @Input() keys: string[];
  content: number;
  usdTab: string;
  eurTab: string;

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {

    const usd: SimpleChange = changes.usdCurrency;
    const eur: SimpleChange = changes.eurCurrency;
    this._usdCurrency = usd.currentValue;
    this._eurCurrency = eur.currentValue;

  }

  onTabChange(event) {
    let index = event.index;
    if (index === 0) {
      this.content = this._usdCurrency.PRICE;
    } else {
      this.content = this._eurCurrency.PRICE;

    }
  }




}








