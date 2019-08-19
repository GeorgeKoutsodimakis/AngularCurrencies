import { CoinsService } from './shared/Services/coins.service';
import { Component, OnInit } from '@angular/core';
import { Currency } from './shared/Model/currency.model';
import { CoinList } from './shared/Model/coinlist.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'crypto currency exchange';


  ngOnInit() {
  }
}
