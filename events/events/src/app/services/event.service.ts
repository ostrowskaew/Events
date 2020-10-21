import { Injectable } from '@angular/core';
import { Event } from '../database-components/event/event';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

 private eventsUrl = 'http://localhost:8080/events'


  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
  return this.http.get<Event[]>(this.eventsUrl);
}

  getEvent(id: number): Observable<Event> {
     const url = `${this.eventsUrl}/${id}`;
     return this.http.get<Event>(url);
  }


/** POST: add a new event to the server */
  addEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.eventsUrl, event, this.httpOptions);
  }



  deleteEvent(idEvent: number): Observable<Event> {
    const url = `${this.eventsUrl}/${idEvent}`;
    return this.http.delete<Event>(url, this.httpOptions);
  }

}
