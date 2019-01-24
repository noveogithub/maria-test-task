import { Component, Input } from '@angular/core';
import { Call } from 'src/app/types';

@Component({
  selector: 'noveo-call-card',
  templateUrl: './call-card.component.html',
  styleUrls: ['./call-card.component.scss']
})
export class CallCardComponent {
  @Input() call: Call;
  @Input() dateFormat = 'MMM d, y, HH:mm:ss';
  @Input() dateParseFormat: string;
}
