import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { Notification } from '../types';

@Component({
  selector: 'noveo-notification-dumb',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [
    trigger('notify', [
      state('show', style({
        opacity: 1,
      })),
      transition('*<=>show', animate('1000ms')),
    ])
  ]
})
export class NotificationComponent implements OnDestroy, OnInit {

  @Output() dismiss: EventEmitter<string> = new EventEmitter();

  @Input() duration = 100000000;
  @Input()
  set notification(notification: Notification) {
    this._notification = notification;
    this.message = this.extractMessage(notification.error, notification.error.message);
  };
  get notification(): Notification {
    return this._notification;
  };

  currentState = 'show';
  message: string;
  private _notification: Notification;
  private subscription = new Subscription();


  ngOnInit() {
    this.subscription.add(
      timer(this.duration).subscribe(() => this.onClose()),
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  extractMessage(error: any, message: string): string {
    if (!error) {
      return message;
    }
    if (error.error && error.error.message) {
      return error.error.message;
    }
    return this.extractMessage(error.error, message);
  }

  onClose() {
    this.dismiss.emit(this.notification.id);
  }
}
