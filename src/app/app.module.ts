import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowsListComponent } from './components/container/shows-list/shows-list.component';
import { PurchaseTicketFormComponent } from './components/container/purchase-ticket-form/purchase-ticket-form.component';
import { ShowComponent } from './components/pure/show/show.component';
import { TicketComponent } from './components/pure/ticket/ticket.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { NavBarComponent } from './components/container/nav-bar/nav-bar.component';
import { BuyTicketPageComponent } from './components/pages/buy-ticket-page-component/buy-ticket-page.component';
import { BuyTicketFormComponent } from './components/pure/buy-ticket-form/buy-ticket-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowsListComponent,
    PurchaseTicketFormComponent,
    ShowComponent,
    TicketComponent,
    HomePageComponent,
    NavBarComponent,
    BuyTicketPageComponent,
    BuyTicketFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
