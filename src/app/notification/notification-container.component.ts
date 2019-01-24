import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../store';
import { Notification } from '../types';

@Component({
  selector: 'noveo-notification',
  template: `
    <div class="noveo-notification-container">
      <noveo-notification-dumb *ngFor="let notification of (notifications$ | async); trackBy: trackById"
        [notification]="notification"
        (dismiss)="onDismiss($event)">
      </noveo-notification-dumb>
    </div>
  `,
  styleUrls: ['./notification-container.component.scss'],
})
export class NotificationContainerComponent {
  notifications$: Observable<Notification[]>

  constructor(private store: Store<fromStore.NoveoState>) {
    this.notifications$ = this.store.select(fromStore.getNotifications);
  }

  onDismiss(id: string) {
    this.store.dispatch(new fromStore.DismissError(id));
  }

  trackById(id: number, notification: Notification) {
    return notification.id;
  }

}
