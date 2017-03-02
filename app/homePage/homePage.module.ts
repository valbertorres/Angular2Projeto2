import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'

import {HomePageComponent} from './homePage.component';
import {ProdutoComponent} from './../produtos/produto.component';

import { FormsModule } from '@angular/forms';
import {homePageRoutigModule} from './home-page-routing.module';

@NgModule({
imports: [
    CommonModule,
    homePageRoutigModule,
    FormsModule
    ],
    declarations : [
        HomePageComponent,
        ProdutoComponent,
        
    ],
    exports : [
        HomePageComponent,
        ProdutoComponent,
    ]
})
export class HomePageModule{}