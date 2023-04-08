import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowsListComponent } from '../components/container/shows-list/shows-list.component';
import { PurchaseTicketFormComponent } from '../components/container/purchase-ticket-form/purchase-ticket-form.component';
import { ShowComponent } from '../components/pure/show/show.component';
import { TicketComponent } from '../components/pure/ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowsListComponent,
    PurchaseTicketFormComponent,
    ShowComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
