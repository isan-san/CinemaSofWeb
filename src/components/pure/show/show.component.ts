import { Component, Input } from '@angular/core';
import { Show } from 'src/models/showModel';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent {
  @Input() show: Show = {
    id: 'string',
    title: 'string',
    isPlayed: true,
    description: 'string',
    categories: [''],
  };
}
