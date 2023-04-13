import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  @Output() serched = new EventEmitter<string>();

  timer: NodeJS.Timeout | null = null;

  onSearch(query: Event) {
    clearTimeout(this.timer as NodeJS.Timeout);
    this.timer = setTimeout(() => {
      this.serched.emit((query.target as HTMLInputElement).value);
    }, 350);
  }
}
