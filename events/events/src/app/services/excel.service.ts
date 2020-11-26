import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ExcelService {

   httpOptions = {
    headers: new HttpHeaders({
      "Content-disposition" : "attachment; filename=reservations" ,
      "Content-Type" : "application/vnd.ms-excel"
    })
  };


  constructor(private http: HttpClient) { }


  getExcel(idEvent: number): Observable<Blob> {
    return this.http.get("http://localhost:8080/api/excel/download/"+idEvent, {responseType: 'blob'});
  }
}
