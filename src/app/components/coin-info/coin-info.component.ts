import { Component, OnInit } from '@angular/core';
import { Coin } from 'src/app/shared/Model/coin.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CoinInfoService } from 'src/app/shared/Services/coin.info.service';
import { validateConfig } from '@angular/router/src/config';
import { CoinCurrencyModel } from 'src/app/shared/Model/coin.curency.model';
import { CoinInfoResponse } from 'src/app/shared/Response/coin.info.response';


@Component({
  selector: 'app-coin-info',
  templateUrl: './coin-info.component.html',
  styleUrls: ['./coin-info.component.css']
})
export class CoinInfoComponent implements OnInit {
  baseImgUrl = "https://www.cryptocompare.com"

  imageUrl: string;
  coinId: string;
  coinCurrencyList: CoinCurrencyModel[];
  coinInfoResponse: CoinInfoResponse[];
  constructor(private router: ActivatedRoute, private coinInfoService: CoinInfoService) { }

  ngOnInit() {
    this.coinId = this.router.snapshot.paramMap.get('id');
    //console.log(this.coinId);
    this.getCoinInfo(this.coinId);

  }

  getCoinInfo(coinId: string) {
    this.coinInfoService.getCoinInfo(coinId).subscribe(value => {
      // console.log(Object.entries(value));
      // console.log(value.RAW);
      // console.log(value.DISPLAY);
      this.coinCurrencyList = value.RAW;

    });
  }

}
