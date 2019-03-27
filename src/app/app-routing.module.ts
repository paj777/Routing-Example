import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectiveStrategy } from './selective-strategy.service';


const rootAppRoutes: Routes = [
    { path: '', loadChildren: './Main/main.module#MainModule' }        
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            rootAppRoutes,            
           { enableTracing: true, preloadingStrategy: SelectiveStrategy })
    ],
    declarations:[
        
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{

}