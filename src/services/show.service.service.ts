import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show } from '../models/showModel';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllShows(): Observable<Show[]> {
    return this.http.get<Show[]>(`${this.baseUrl}/shows`);
  }

  getShowById(id: string): Observable<Show> {
    return this.http.get<Show>(`${this.baseUrl}/shows/${id}`);
  }

  saveShow(show: Show): Observable<Show> {
    return this.http.post<Show>(`${this.baseUrl}/shows`, show);
  }

  playShow(id: string, show: Show): Observable<Show> {
    return this.http.put<Show>(`${this.baseUrl}/shows/${id}`, show);
  }
}
