import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Show } from 'src/models/showModel';
import { ShowService } from 'src/services/show.service.service';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.scss'],
})
export class ShowsListComponent implements OnInit {
  shows: Show[] = [];
  filteredShows: Show[] = [];
  @Input() filter: string = '';

  constructor(private showService: ShowService) {}

  ngOnInit(): void {
    this.showService.getAllShows().subscribe((shows) => {
      this.shows = shows;
      this.filteredShows = shows;
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['filter']) {
      this.filterShows(this.filter, this.shows);
    }
  }
  filterShows(filter: string, shows: Show[]) {
    filter.toLowerCase;
    this.filteredShows = [];
    this.shows
      .filter((show) => show.title.trim().includes(filter.trim()))
      .forEach((show) => this.filteredShows.push(show));
    this.shows
      .filter((show) => {
        return show.categories.find((categorie) => {
          categorie.toLowerCase;
          return categorie.trim().includes(filter.trim());
        });
      })
      .forEach((show) => {
        if (!this.filteredShows.includes(show)) {
          this.filteredShows.push(show);
        }
      });
  }
}
