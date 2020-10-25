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

  getNationalities(): Observable<any> {
  return this.http.get(this.nationalitiesUrl);
}

  getNationality(id: number): Observable<Object> {
     const url = `${this.nationalityUrl}/${id}`;
     return this.http.get<Nationality>(url);
  }


/** POST: add a new nationality to the server */
  addNationality(nationality: Object): Observable<Object> {
    return this.http.post(this.nationalityUrl, nationality);
  }



  deleteNationality(idNationality: number): Observable<any> {
    const url = `${this.nationalityUrl}/${idNationality}`;
    return this.http.delete<Nationality>(url);
  }

}
