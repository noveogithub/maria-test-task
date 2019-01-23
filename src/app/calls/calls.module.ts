import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CallsContainerComponent } from './calls-container.component';
import { CallsComponent } from './calls.component';

@NgModule({
  declarations: [CallsComponent, CallsContainerComponent],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class CallsModule { }
