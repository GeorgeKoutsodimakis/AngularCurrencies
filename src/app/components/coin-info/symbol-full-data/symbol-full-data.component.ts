import { Component, OnInit, Input } from '@angular/core';
import { Coin } from 'src/app/shared/Model/coin.model';
import { Currency } from 'src/app/shared/Model/currency.model';

@Component({
  selector: 'app-symbol-full-data',
  templateUrl: './symbol-full-data.component.html',
  styleUrls: ['./symbol-full-data.component.css']
})
export class SymbolFullDataComponent implements OnInit {

  @Input() usdCurrency: Currency;
  @Input() eurCurrency: Currency;
  constructor() { }

  ngOnInit() {
  }






}
