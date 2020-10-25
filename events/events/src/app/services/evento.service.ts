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

  getEventos(): Observable<Evento[]> {
  return this.http.get<Evento[]>(this.eventosUrl)
  .pipe(
    tap(_ => this.log('fetched eventos')),
    catchError(this.handleError<Evento[]>('getEventos', []))
  );
}

  getEvento(id: number): Observable<Evento> {
     const url = `${this.eventosUrl}/${id}`;
     return this.http.get<Evento>(url).pipe(
     tap(_ => this.log(`fetched evento id=${id}`)),
     catchError(this.handleError<Evento>(`getEvento id=${id}`))
  );
  }

  private log(message: string) {
  this.messageService.add(`EventoService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    this.log(`${operation} failed: ${error.message}`);

    return of(result as T);
  };
  }

/** POST: add a new evento to the server */
  addEvento(evento: Evento): Observable<Evento> {
    return this.http.post<Evento>(this.eventosUrl, evento, this.httpOptions).pipe(
      tap((newEvento: Evento) => this.log(`added evento w/ id=${newEvento.idEvento}`)),
      catchError(this.handleError<Evento>('addEvento'))
    );
  }



  deleteEvento(idEvento: string): Observable<Evento> {
    const url = `${this.eventosUrl}/${idEvento}`;
    return this.http.delete<Evento>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted evento id=${idEvento}`)),
      catchError(this.handleError<Evento>('deleteEvento'))
    );
  }

}
