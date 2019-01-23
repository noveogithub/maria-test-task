import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'noveo-header-dumb',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() logout: EventEmitter<void> = new EventEmitter();

  @Input() authenticated: boolean;

  onLogout() {
    this.logout.emit();
  }

}
