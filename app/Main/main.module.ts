import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { ActionsModule } from '../Cloner/actions/actions.module';
import { RouterModule } from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';

@NgModule({
  declarations: [MainContainerComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    ActionsModule,
    RouterModule
  ]
})
export class MainModule { }
