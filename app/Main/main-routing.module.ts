import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';
import { CloneContainerComponent } from '../cloner/clone-container/clone-container.component';
import { FiddlerContainerComponent } from '../fiddler/fiddler-container/fiddler-container.component';
import { ScratcherContainerComponent } from '../scratcher/scratcher-container/scratcher-container.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path:'main',
                component: MainContainerComponent,
                children:[{
                    path:'',
                    component: MainContainerComponent

                },
                {
                    path:'cloner',
                    component: CloneContainerComponent
                },
                { 
                    path:'fiddler',
                    component: FiddlerContainerComponent
                },
                {
                    path:'scratcher',
                    component: ScratcherContainerComponent
                }]
                    
            }
            
          ])
    ],
    exports:[RouterModule],
    declarations:[
        CloneContainerComponent,
        FiddlerContainerComponent,
        ScratcherContainerComponent
    ]
})

export class MainRoutingModule{

}