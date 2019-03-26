import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainContainerComponent } from './Main/main-container/main-container.component';
import { CloneContainerComponent } from './cloner/clone-container/clone-container.component';
import { FiddlerContainerComponent } from './fiddler/fiddler-container/fiddler-container.component';
import { ScratcherContainerComponent } from './scratcher/scratcher-container/scratcher-container.component';
import { AppComponent } from './app.component';
import { SelectiveStrategy } from './selective-strategy.service';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'main', component: MainContainerComponent },
            { path: '', redirectTo: 'main', pathMatch: 'full' }
            
          ], { enableTracing: true, preloadingStrategy: SelectiveStrategy })
    ],
    declarations:[
        
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{

}

//{ path: 'main', loadChildren: 'app/Main/main.module#MainModule' },