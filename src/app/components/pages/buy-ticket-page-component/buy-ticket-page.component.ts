import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormValues } from '../../pure/buy-ticket-form/buy-ticket-form.component';
const formData = require('form-data');
import * as Mailgun from 'mailgun-js';

@Component({
  selector: 'app-buy-ticket-page-component',
  templateUrl: './buy-ticket-page-component.component.html',
  styleUrls: ['./buy-ticket-page-component.component.scss'],
})
export class BuyTicketPageComponent {
  constructor(private route: ActivatedRoute) {}
  showId: string = '';
  mailgun: Mailgun.Mailgun | undefined = undefined;

  ngOnInit() {
    this.showId = this.route.snapshot.paramMap.get('showId') as string;
    this.mailgun = new Mailgun({
      apiKey: 'aa4b61d7f0a72b494a9467b0bf90f893-2cc48b29-27fcb427',
      domain:
        'https://api.mailgun.net/v3/sandboxeb921424f3cb463a98b8aecd9bd103b0.mailgun.org',
    });

  }

  buyTicket(data: FormValues) {
      this.mailgun?.post('sandbox-123.mailgun.org', {
        from: "Excited User <mailgun@sandbox-123.mailgun.org>",
        to: ["isan.9.9f@gmail.com"],
        subject: "Hello",
        text: "Testing some Mailgun awesomeness!",
        html: "<h1>Testing some Mailgun awesomeness!</h1>"
      })
      .then(msg => console.log(msg)) // logs response data
      .catch(err => console.log(err));
  }
}
