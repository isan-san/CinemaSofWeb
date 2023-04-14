import { Component, Input } from '@angular/core';
import { Show } from 'src/models/showModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent {

  constructor(private router: Router){}

  @Input() show: Show = {
    id: 'string',
    title: 'string',
    isPlayed: true,
    description: 'string',
    availableTickets:0,
    categories: [''],
  };

  goToBuyTicket() {
    this.router.navigate(['/buy-ticket', this.show.id]);
  }
}
