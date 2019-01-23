import { Component, Input } from '@angular/core';
import { Call } from '../types';

@Component({
  selector: 'noveo-calls-dumb',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.scss']
})
export class CallsComponent {
  @Input() calls: Call[] = [];
  @Input() loading: boolean;
}
