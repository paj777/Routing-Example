import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsComponent } from './actions/actions.component';
import { ClonerRoutingModule } from './cloner-routing.module';

@NgModule({
  declarations: [ActionsComponent, ActionsComponent],
  imports: [
    CommonModule,
    ClonerRoutingModule
  ]
})
export class ClonerModule { }
