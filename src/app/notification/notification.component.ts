import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { NoveoNotification } from '../types';

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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent implements OnDestroy, OnInit {

  @Output() dismiss: EventEmitter<string> = new EventEmitter();

  @Input() duration = 10000;
  @Input()
  set notification(notification: NoveoNotification) {
    this._notification = notification;
    this.message = this.extractMessage(notification.error, notification.error.message);
  };
  get notification(): NoveoNotification {
    return this._notification;
  };

  currentState = 'show';
  message: string;
  private _notification: NoveoNotification;
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
