import { Component, OnInit } from '@angular/core';
import { Show } from 'src/models/showModel';
import { ShowService } from 'src/services/show.service.service';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.scss']
})
export class ShowsListComponent implements OnInit {

  shows: Show[] = [];

  constructor(private showService: ShowService) { }

  ngOnInit(): void {
    this.showService.getAllShows().subscribe(shows => this.shows = shows);
  }

}
