import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
  ]
})
export class CallProfileModule { }
