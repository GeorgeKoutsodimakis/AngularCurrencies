import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AllCoinsComponent } from './components/all-coins/all-coins.component';
import { MenuComponent } from './components/menu/menu.component';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CoinInfoComponent } from './components/coin-info/coin-info.component';
import { AppRoutingModule } from './app-routing.module';
import { SymbolFullDataComponent } from './components/coin-info/symbol-full-data/symbol-full-data.component';
import { CoinInfoService } from './shared/Services/coin.info.service';
import { CoinsService } from './shared/Services/coins.service';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown'
@NgModule({
  declarations: [
    AppComponent,
    AllCoinsComponent,
    MenuComponent,
    CoinInfoComponent,
    SymbolFullDataComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    TabViewModule,
    TableModule,
    DropdownModule,
    AppRoutingModule
  ],
  providers: [CoinInfoService, CoinsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
