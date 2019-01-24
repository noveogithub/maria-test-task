import { HttpErrorResponse } from '@angular/common/http';

export interface Notification {
  id: string;
  error: HttpErrorResponse;
}
