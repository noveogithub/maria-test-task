import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { CallsContainerComponent } from './calls-container.component';
import { CallsComponent } from './calls.component';
import { CallCardComponent } from './call-card/call-card.component';

@NgModule({
  declarations: [CallsComponent, CallsContainerComponent, CallCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
  ]
})
export class CallsModule { }
