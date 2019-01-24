import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationContainerComponent } from './notification-container.component';
import { NotificationComponent } from './notification.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    NotificationContainerComponent,
    NotificationComponent,
  ],
  exports: [
    NotificationContainerComponent,
  ],
})
export class NotificationModule { }
