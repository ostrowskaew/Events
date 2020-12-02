import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Evento } from '../database-components/evento/Evento';
import { MessageService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class EventoEsService {

  private eventosUrl = 'http://localhost:8080/eventsEs';

  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getEventos(): Observable<any> {
    return this.http.get(this.eventosUrl);
  }

    getEvento(id: number): Observable<Evento> {
       const url = `${this.eventosUrl}/${id}`;
       return this.http.get<Evento>(url);
    }


  /** POST: add a new evento to the server */
    addEvento(evento: Object): Observable<number> {
      return this.http.post<number>(this.eventosUrl, evento);
    }



    deleteEvento(idEvento: number): Observable<any> {
      const url = `${this.eventosUrl}/${idEvento}`;
      return this.http.delete<Evento>(url);
    }

    searchEvent(term: string): Observable<Evento[]> {
      if (!term.trim()) {
        return of([]);
      }
      return this.http.get<Evento[]>(`${this.eventosUrl}/bytitle/${term}`);
    }
}
