import { Injectable } from '@angular/core';
import { Evento } from '../database-components/evento/Evento';
import { Observable, of } from 'rxjs';
import { MessageService } from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

 private eventosUrl = 'http://localhost:8080/events';

  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getEventos(): Observable<any> {
    return this.http.get(this.eventosUrl);
  }

    getEvento(id: number): Observable<Object> {
       const url = `${this.eventosUrl}/${id}`;
       return this.http.get<Evento>(url);
    }


  /** POST: add a new evento to the server */
    addEvento(evento: Object): Observable<Object> {
      return this.http.post(this.eventosUrl, evento);
    }



    deleteEvento(idEvento: number): Observable<any> {
      const url = `${this.eventosUrl}/${idEvento}`;
      return this.http.delete<Evento>(url);
    }
}
