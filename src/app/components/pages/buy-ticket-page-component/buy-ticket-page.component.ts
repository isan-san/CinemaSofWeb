import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buy-ticket-page-component',
  templateUrl: './buy-ticket-page-component.component.html',
  styleUrls: ['./buy-ticket-page-component.component.scss'],
})
export class BuyTicketPageComponent {

  constructor(private route: ActivatedRoute) {}
  showId:string = "";

  ngOnInit() {
    this.showId = this.route.snapshot.paramMap.get('showId') as string;
  }
}
