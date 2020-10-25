import { Injectable } from '@angular/core';
import { Reservation } from '../database-components/reservation/reservation';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

 private reservationsUrl = 'http://localhost:8080/reservations';
 private reservationUrl = 'http://localhost:8080/reservation';


  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getReservations(): Observable<any> {
    return this.http.get(this.reservationsUrl);
  }

  getReservation(id: number): Observable<Object> {
     const url = `${this.reservationUrl}/${id}`;
     return this.http.get<Reservation>(url);
  }


/** POST: add a new reservation to the server */
addReservation(reservation: Reservation, idEvent : number, idUser : string): Observable<Object> {
  const url = `${this.reservationsUrl}/${idEvent}/${idUser}`;
  return this.http.post(url, reservation);
}



  deleteReservation(idReservation: number): Observable<any> {
    const url = `${this.reservationUrl}/${idReservation}`;
    return this.http.delete<Reservation>(url);
  }

}
