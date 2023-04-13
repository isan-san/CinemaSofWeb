import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  query: string = '';

  onSearch(query:string) {
    // Handle the search query here
    this.query=query
  }
}
