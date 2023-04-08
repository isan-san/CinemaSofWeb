import { Component } from '@angular/core';
import { ShowsListComponent } from 'src/components/container/shows-list/shows-list.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  filter: string = '';
}
