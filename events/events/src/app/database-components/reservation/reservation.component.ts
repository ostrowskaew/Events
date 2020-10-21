import { Component, OnInit } from '@angular/core';
import { Reservation } from './reservation';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

 reservations: Reservation[];

  constructor(private reservationService: ReservationService) {}

  ngOnInit() {
    this.getReservations();
  }

  getReservations(): void {
    this.reservationService.getReservations()
    .subscribe(reservations => this.reservations = reservations);
  }

  getReservationList(): Reservation[] {
    return this.reservations;
  }


  addReservation(payed: boolean, idEvent : number, idUser : number): void {
    this.reservationService.addReservation({ payed } as Reservation, idEvent, idUser)
      .subscribe(reservation => {
        this.reservations.push(reservation);
      });
  }

}
