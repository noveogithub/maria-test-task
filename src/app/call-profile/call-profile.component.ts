import { Component, Input } from '@angular/core';
import { Call } from '../types';

@Component({
  selector: 'noveo-call-profile-dumb',
  templateUrl: './call-profile.component.html',
  styleUrls: ['./call-profile.component.scss']
})
export class CallProfileComponent {
  @Input() call: Call;
  @Input() dateFormat = 'MMM d, y, HH:mm:ss';
  @Input() dateParseFormat: string;
  @Input() loading: boolean;
}
