import {NgModule} from '@angular/core'

import {RouterModule, Routes} from '@angular/router';

import { HomePageComponent } from './homePage.component';
import {ProdutoComponent} from './../produtos/produto.component';

const homepageRoutes : Routes = [
    {
        path : 'home',
        component : HomePageComponent
    },
    {
        path :'home/produto',
        component : ProdutoComponent
    }
]

@NgModule({
    imports : [
        RouterModule.forChild(homepageRoutes)
    ],
    exports : [
        RouterModule
    ]
})
export class homePageRoutigModule{}