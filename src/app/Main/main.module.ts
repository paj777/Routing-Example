import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContainerComponent } from './main-container/main-container.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [MainContainerComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
