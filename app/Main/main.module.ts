import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContainerComponent } from './main-container/main-container.component';
import { MainRoutingModule } from './main-routing.module';
import { RouterModule } from '@angular/router';
import { CloneContainerComponent } from '../cloner/clone-container/clone-container.component';
import { FiddlerContainerComponent } from '../fiddler/fiddler-container/fiddler-container.component';
import { ScratcherContainerComponent } from '../scratcher/scratcher-container/scratcher-container.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
