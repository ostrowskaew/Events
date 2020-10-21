import { Injectable } from '@angular/core';
import { Nationality } from './nationalities/nationality';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NationalityService {

 private nationalitiesUrl = 'http://localhost:8080/nationalities';

  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getNationalities(): Observable<Nationality[]> {
  return this.http.get<Nationality[]>(this.nationalitiesUrl)
  .pipe(
    tap(_ => this.log('fetched nationalities')),
    catchError(this.handleError<Nationality[]>('getNationalities', []))
  );
}

  getNationality(id: number): Observable<Nationality> {
     const url = `${this.nationalitiesUrl}/${id}`;
     return this.http.get<Nationality>(url).pipe(
     tap(_ => this.log(`fetched nationality id=${id}`)),
     catchError(this.handleError<Nationality>(`getNationality id=${id}`))
  );
  }

  private log(message: string) {
  this.messageService.add(`NationalityService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    this.log(`${operation} failed: ${error.message}`);

    return of(result as T);
  };
  }
/** POST: add a new nationality to the server */
  addNationality(nationality: Nationality): Observable<Nationality> {
    return this.http.post<Nationality>(this.nationalitiesUrl, nationality, this.httpOptions).pipe(
      tap((newNationality: Nationality) => this.log(`added nationality w/ id=${newNationality.id}`)),
      catchError(this.handleError<Nationality>('addNationality'))
    );
  }



  deleteNationality(idNationality: string): Observable<Nationality> {
    const url = `${this.nationalitiesUrl}/${idNationality}`;
    return this.http.delete<Nationality>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted nationality id=${idNationality}`)),
      catchError(this.handleError<Nationality>('deleteNationality'))
    );
  }

}
