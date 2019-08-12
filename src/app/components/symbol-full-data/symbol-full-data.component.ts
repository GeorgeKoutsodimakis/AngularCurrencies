import { Component, OnInit, Input } from '@angular/core';
import { SymbolFullDataService } from 'src/app/shared/Services/symbol.full.data.service';
import { Coin } from 'src/app/shared/Model/coin.model';

@Component({
  selector: 'app-symbol-full-data',
  templateUrl: './symbol-full-data.component.html',
  styleUrls: ['./symbol-full-data.component.css']
})
export class SymbolFullDataComponent implements OnInit {

  constructor(public symbolFullDataService: SymbolFullDataService) { }

  ngOnInit() {
    this.getSymbolFullData();
  }

  getSymbolFullData() {
    this.symbolFullDataService.getSymbolFullData().subscribe(value => {
      console.log(value);
    });
  }




}
