import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderContainerComponent } from './header-container.component';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    HeaderContainerComponent,
    HeaderComponent,
  ],
  exports: [
    HeaderContainerComponent
  ]
})
export class HeaderModule { }
