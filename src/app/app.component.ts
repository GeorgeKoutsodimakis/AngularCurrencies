import { CurrencyService } from './shared/currency.service';
import { Component, OnInit } from '@angular/core';
import { Currency } from '../../src/app/shared/currency';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'crypto currency exchange';
  currencies: Currency[];

  constructor(private currencyService: CurrencyService) {}
  getCurrencies(): void {
    this.currencyService.getAllCurrencies()
    .subscribe(currencies => this.currencies = currencies);
  }

  ngOnInit(){
    this.getCurrencies();
  }
}
