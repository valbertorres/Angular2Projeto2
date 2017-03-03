import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {HomePageModule} from './homePage/homePage.module';

import { AppRoutingModule } from './app-routing.module';

import { HttpModule } from '@angular/http';

import {InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from './in-memory.service';

import { ProdutoService } from './produtos/produto.service';



@NgModule({
    imports : [
        AppRoutingModule,
        BrowserModule,
        HomePageModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
        ],

    declarations : [
        AppComponent
        ],
    bootstrap: [
        AppComponent
        ],
        providers: [
            ProdutoService
        ]
})
export class AppModule{}