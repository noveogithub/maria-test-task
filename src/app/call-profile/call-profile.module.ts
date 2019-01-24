import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { CallProfileContainerComponent } from './call-profile-container.component';
import { CallProfileComponent } from './call-profile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CallProfileComponent,
    CallProfileContainerComponent,
  ],
})
export class CallProfileModule { }
