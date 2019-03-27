import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActionsComponent } from '../Cloner/actions/actions.component';
import { CloneContainerComponent } from './clone-container/clone-container.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', redirectTo: 'cloner', pathMatch: 'full' },
            {
                path:'cloner',
                component: CloneContainerComponent,
                children:[
                {
                    path: 'actions',
                    component: ActionsComponent,
                    outlet: 'actionsbar'
                  }]                    
            }            
          ])
    ],
    exports:[RouterModule]
})

export class ClonerRoutingModule{

}