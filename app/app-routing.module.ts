import  {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

const appRoutings : Routes = [
    {
        path : '',
        redirectTo : '/home',
        pathMatch : 'full'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutings)
    ],
    exports:[
        RouterModule
    ]

})
export class AppRoutingModule{}