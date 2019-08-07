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
import { CoinInfoService } from '../app/shared/Services/coin.info.service';
import { SymbolsComponent } from './components/symbols/symbols.component';

@NgModule({
  declarations: [
    AppComponent,
    AllCoinsComponent,
    MenuComponent,
    CoinInfoComponent,
    SymbolsComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    AppRoutingModule
  ],
  providers: [CoinInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
