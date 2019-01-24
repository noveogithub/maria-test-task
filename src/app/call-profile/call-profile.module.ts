import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { CallProfileContainerComponent } from './call-profile-container.component';
import { CallProfileComponent } from './call-profile.component';

@NgModule({
  declarations: [
    CallProfileComponent,
    CallProfileContainerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
  ]
})
export class CallProfileModule { }
