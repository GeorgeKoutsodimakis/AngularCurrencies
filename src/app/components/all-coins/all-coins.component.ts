import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import { CoinList } from 'src/app/shared/Model/coinList.model';
import { CoinsService } from 'src/app/shared/Services/coins.service';
import { Coin } from 'src/app/shared/Model/coin.model';
import { Router } from '@angular/router'
import { LazyLoadEvent } from 'primeng/api';
import { CoinInfoResponse } from 'src/app/shared/Response/coin.info.response';
import { coinTableModel } from 'src/app/shared/Model/coinTableModel';
import { CoinCurrencyModel } from 'src/app/shared/Model/coin.curency.model';
import { element } from 'protractor';
import { Currency } from 'src/app/shared/Model/currency.model';

@Component({
  selector: 'app-all-coins',
  templateUrl: './all-coins.component.html',
  styleUrls: ['./all-coins.component.css']
})
export class AllCoinsComponent implements OnInit {

  coinList: CoinList[];
  coins: Coin[];
  lazyCoin: Coin[];
  cols: any[];
  keys: string[];
  image: string;
  totalRecords: number;
  baseUrl: string;
  loading: boolean;
  coinInfoResponse: CoinInfoResponse;
  coinsId: string[];
  coinTable: coinTableModel[];
  tableValue: coinTableModel;

  constructor(
    private coinsService: CoinsService,
    public router: Router,
    public changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.tableValue = new coinTableModel();
    this.coinsId = [];
    this.coins = [];
    this.lazyCoin = [];
    this.coinTable = [];
    this.baseUrl = "https://www.cryptocompare.com"
    this.cols = this.getColumns();
    this.getAllCoins();
    this.loading = true;
  }

  getAllCoins() {
    this.coinsService.getAllCoins().then(coinList => {
      this.coinList = coinList
      this.keys = Object.keys(this.coinList);
      this.keys.forEach(value => {
        this.coins.push(this.coinList[value]);
        this.totalRecords = this.coins.length;
      });

    }
    );
  }

  getColumns() {
    return [
      { field: 'coin', header: 'coin' },
      { field: 'price', header: 'price' },
      { field: 'total vol', header: 'total vol' },
      { field: 'top tier vol', header: 'top tier vol' },
      { field: 'mkt cap', header: 'mkt cap' },
      { field: 'change 24H', header: 'change 24H' }
    ]

  }

  loadCoinsLazy(event: LazyLoadEvent) {
    let coinsString;
    setTimeout(() => {
      this.loading = true;
      if (this.coins) {
        this.lazyCoin = this.coins.slice(event.first, (event.first + event.rows));
        this.changeDetectorRef.detectChanges();
        coinsString = this.getCoinsId(this.lazyCoin);
        this.getCoinsInfo(coinsString);

        this.loading = false;
      }
    }, 1000);
  }

  getCoinsId(coins: Coin[]) {
    let tempCoins = [];
    coins.forEach(value => {
      tempCoins.push(value.Symbol);
    });
    return tempCoins.toString();
  }

  getCoinsInfo(coins: string) {
    return this.coinsService.getAllCoinsInfo(coins).then(value => {
      let coinValue = value;
      this.coinTable = [];

      for (var i in this.lazyCoin) {
        this.tableValue = new coinTableModel();
        this.tableValue.coinSymbol = this.lazyCoin[i].Symbol;
        this.tableValue.coinId = this.lazyCoin[i].Id;
        this.tableValue.coinName = this.lazyCoin[i].CoinName;
        this.tableValue.imageUrl = this.lazyCoin[i].ImageUrl;
        //this.tableValue.price = Object.values(coinValue)[i].PRICE.toString() !== 'undefined' ? Object.values(coinValue)[i]['USD'].PRICE : "-";
        // console.log(Object.values(coinValue)[i]['USD']);
        // this.tableValue.price = (Object.values(coinValue)[i]['USD'].PRICE != 'undefined') ? Object.values(coinValue)[i]['USD'].PRICE : "-";
        // this.tableValue.total_vol = Object.values(coinValue)[i]['USD'].TOTALVOLUME24H;
        // this.tableValue.top_tier_vol = Object.values(coinValue)[i]['USD'].TOTALTOPTIERVOLUME24H;
        // this.tableValue.mkt_cap = Object.values(coinValue)[i]['USD'].MKTCAP;
        // this.tableValue.change_24H = Object.values(coinValue)[i]['USD'].CHANGE24HOUR;

        this.coinTable.push(this.tableValue);
        continue;

      }
    });
  }



}


