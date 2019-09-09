import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CoinList } from 'src/app/shared/Model/coinList.model';
import { CoinsService } from 'src/app/shared/Services/coins.service';
import { Coin } from 'src/app/shared/Model/coin.model';
import { Router } from '@angular/router'
import { LazyLoadEvent } from 'primeng/api';
import { CoinInfoResponse } from 'src/app/shared/Response/coin.info.response';
import { coinTableModel } from 'src/app/shared/Model/coinTableModel';
import { interval } from 'rxjs/internal/observable/interval';
import { Currency } from 'src/app/shared/Model/currency.model';
import { flatMap } from 'rxjs/operators';



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
  coinValue: Currency[];
  isNaN: Function = Number.isNaN;
  coinString: string;

  constructor(
    private coinsService: CoinsService,
    public router: Router,
    public changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.tableValue = new coinTableModel();
    this.coinsId = [];
    this.coins = [];
    this.lazyCoin = [];
    this.coinValue = [];
    this.baseUrl = "https://www.cryptocompare.com"
    this.cols = this.getColumns();
    this.getAllCoins();
    this.loading = true;
  }

  /**
   * Function that calls all the coins from the api and populates tha table and 
   * the paginator
   */
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


  /**
   * Function that populates the table columns header
   */
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



  /**
   * Function that loads data to table lazy
   * @param event 
   */
  loadCoinsLazy(event: LazyLoadEvent) {
    setTimeout(() => {
      this.loading = true;
      if (this.coins) {
        this.lazyCoin = this.coins.slice(event.first, (event.first + event.rows));
        this.changeDetectorRef.detectChanges();
        this.coinString = this.getCoinsId(this.lazyCoin);
        this.getCoinsInfo(this.coinString);
        this.loading = false;
      }
    }, 3000);
  }

  /**
   * Function that returns the aprropreate coin id's to string form and pass them 
   * to the lazy load function to call the api
   * @param coins 
   */
  getCoinsId(coins: Coin[]) {
    let tempCoins = [];
    coins.forEach(value => {
      tempCoins.push(value.Symbol);
    });
    return tempCoins.toString();
  }


  /**
   * Functions tha return coins info every 3 seconds and updates the table with the new values;
   */
  getCoinsInfo(coins: string) {
    interval(3000)
      .pipe(flatMap(() => this.coinsService.getAllCoinsInfo(coins)))
      .subscribe(data => {
        let coinValue = data.DISPLAY;
          this.coinTable = [];
          let coinKeys = Object.keys(coinValue);
          for (var i in this.lazyCoin) {
            this.tableValue = new coinTableModel();
            this.tableValue.coinSymbol = this.lazyCoin[i].Symbol;
            this.tableValue.coinId = this.lazyCoin[i].Id;
            this.tableValue.coinName = this.lazyCoin[i].CoinName;
            this.tableValue.imageUrl = this.lazyCoin[i].ImageUrl;
            for (var x in coinKeys) {
              if (coinKeys[x].includes(this.lazyCoin[i].Symbol)) {
                this.tableValue.price = Object.values(coinValue)[x]['USD'].PRICE;
                this.tableValue.total_vol = Object.values(coinValue)[x]['USD'].TOTALVOLUME24H;
                this.tableValue.top_tier_vol = Object.values(coinValue)[x]['USD'].TOTALTOPTIERVOLUME24H;
                this.tableValue.mkt_cap = Object.values(coinValue)[x]['USD'].MKTCAP;
                this.tableValue.change_24H = Object.values(coinValue)[x]['USD'].CHANGE24HOUR;
              }
            }
            this.coinTable.push(this.tableValue);
          }

      });

  }



}
