import { Component, OnInit } from '@angular/core';
import { SymbolResponse } from 'src/app/shared/Response/symbol.response';
import { SymbolsService } from 'src/app/shared/Services/symbols.service';
import { Key } from 'protractor';

@Component({
  selector: 'app-symbols',
  templateUrl: './symbols.component.html',
  styleUrls: ['./symbols.component.css']
})
export class SymbolsComponent implements OnInit {

  symbolResponse: SymbolResponse[];
  constructor(private symbolService: SymbolsService) { }

  ngOnInit() {
    this.getSymbols();
  }

  getSymbols() {
    this.symbolService.getSymbols().subscribe(response => {
      // console.log(response);
      this.symbolResponse = response;
    });
  }

}
