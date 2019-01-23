import { Component, Input, OnInit } from '@angular/core';
import { Call } from '../types';

@Component({
  selector: 'noveo-call-profile-dumb',
  templateUrl: './call-profile.component.html',
  styleUrls: ['./call-profile.component.scss']
})
export class CallProfileComponent implements OnInit {
  @Input() call: Call;
  @Input() loading: boolean;

  constructor() { }

  ngOnInit() {
  }

}
