import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Call } from '../types';

@Component({
  selector: 'noveo-calls-dumb',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CallsComponent {
  @Input() calls: Call[] = [];
  @Input() dateFormat = 'MMM d, y, HH:mm:ss';
  @Input() dateParseFormat: string;
  @Input() loading: boolean;
}
