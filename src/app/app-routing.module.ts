import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllCoinsComponent } from './components/all-coins/all-coins.component';
import { CoinInfoComponent } from './components/coin-info/coin-info.component';


const appRoutes: Routes = [
  { path: '', component: AllCoinsComponent },
  { path: 'coin', component: CoinInfoComponent },
]
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
