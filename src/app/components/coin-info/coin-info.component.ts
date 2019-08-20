import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinInfoService } from 'src/app/shared/Services/coin.info.service';
import { CoinCurrencyModel } from 'src/app/shared/Model/coin.curency.model';
import { CoinInfoResponse } from 'src/app/shared/Response/coin.info.response';
import { Currency } from 'src/app/shared/Model/currency.model';



@Component({
  selector: 'app-coin-info',
  templateUrl: './coin-info.component.html',
  styleUrls: ['./coin-info.component.css']
})
export class CoinInfoComponent implements OnInit {
  baseImgUrl = "https://www.cryptocompare.com"

  imageUrl: string;
  coinId: string;

  coinCurrencyList: CoinCurrencyModel;
  coinInfoResponse: CoinInfoResponse;
  usdCurrency: Currency;
  eurCurrency: Currency;
  keys: string[];
  constructor(private router: ActivatedRoute, private coinInfoService: CoinInfoService) { }

  ngOnInit() {
    this.coinId = this.router.snapshot.paramMap.get('id');
    //console.log(this.coinId);
    this.getCoinInfo(this.coinId);

  }

  getCoinInfo(coinId: string) {
    this.coinInfoService.getCoinInfo(coinId).subscribe(value => {
      this.coinInfoResponse = value;
      this.coinCurrencyList = value.DISPLAY;
      this.keys = Object.keys(this.coinCurrencyList[coinId]);
      this.usdCurrency = this.coinCurrencyList[coinId][this.keys[0]];
      this.eurCurrency = this.coinCurrencyList[coinId][this.keys[1]];
      this.imageUrl = this.baseImgUrl + this.usdCurrency.IMAGEURL;

    });
  }

}
