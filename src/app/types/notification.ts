import { HttpErrorResponse } from '@angular/common/http';

export interface NoveoNotification {
  id: string;
  error: HttpErrorResponse;
}
