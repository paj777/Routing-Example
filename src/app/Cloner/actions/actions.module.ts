import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActionsComponent } from './actions.component';

@NgModule({
  declarations: [ActionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'actions',
        component: ActionsComponent,
        outlet: 'actionsbar'
      }
    ])
  ]
})
export class ActionsModule { }
