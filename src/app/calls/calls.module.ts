import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { CallsContainerComponent } from './calls-container.component';
import { CallsComponent } from './calls.component';

@NgModule({
  declarations: [CallsComponent, CallsContainerComponent],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
  ]
})
export class CallsModule { }
