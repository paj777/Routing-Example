import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CloneContainerComponent } from './cloner/clone-container/clone-container.component';
import { FiddlerContainerComponent } from './fiddler/fiddler-container/fiddler-container.component';
import { ScratcherContainerComponent } from './scratcher/scratcher-container/scratcher-container.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MainContainerComponent } from './Main/main-container/main-container.component';
import { ActionsModule } from './Cloner/actions/actions.module';

@NgModule({
  declarations: [
    AppComponent,
    CloneContainerComponent,
    FiddlerContainerComponent,
    ScratcherContainerComponent,
    MainContainerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ActionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
