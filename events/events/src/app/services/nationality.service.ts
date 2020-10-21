import { Injectable } from '@angular/core';
import { Nationality } from '../database-components/nationality/nationality';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Injectable({
  providedIn: 'root'
})
export class NationalityService {

 private nationalityUrl = 'http://localhost:8080/nationality';
 private nationalitiesUrl = 'http://localhost:8080/nationalities'


  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getNationalities(): Observable<Nationality[]> {
  return this.http.get<Nationality[]>(this.nationalitiesUrl);
}

  getNationality(id: number): Observable<Nationality> {
     const url = `${this.nationalityUrl}/${id}`;
     return this.http.get<Nationality>(url);
  }


/** POST: add a new nationality to the server */
  addNationality(nationality: Nationality): Observable<Nationality> {
    return this.http.post<Nationality>(this.nationalityUrl, nationality, this.httpOptions);
  }



  deleteNationality(idNationality: number): Observable<Nationality> {
    const url = `${this.nationalityUrl}/${idNationality}`;
    return this.http.delete<Nationality>(url, this.httpOptions);
  }

}
