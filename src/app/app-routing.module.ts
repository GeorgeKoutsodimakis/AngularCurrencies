
import { NgModule, Component } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { CoinInfoComponent } from './components/coin-info/coin-info.component';
import { AllCoinsComponent } from './components/all-coins/all-coins.component';

const routes: Routes = [
    { path: '', redirectTo: '/coins', pathMatch: 'full' },

    {
        path: 'coins', component: AllCoinsComponent
    },
    {
        path: 'coin/:id', component: CoinInfoComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
