import { Component, OnInit } from '@angular/core';
import { Reservation } from './reservation';
import { ReservationService } from '../../services/reservation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {


  reservations: Observable<Reservation[]>;
  submitted = false;
  reservation: Reservation = new Reservation();
  idUser : string;
  idEvento : number;

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.reloadData();
  }

  newReservation(): void {
    this.submitted = false;
    this.reservation = new Reservation();
  }

  save() {
    this.reservationService.addReservation(this.reservation, this.idEvento, this.idUser)
      .subscribe(data => console.log(data), error => console.log(error));
    this.reservation = new Reservation();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  refreshPage(): void {
    window.location.reload();
  }

  reloadData() {
    this.reservations = this.reservationService.getReservations();
  }

  deleteReservation(id: number) {
    this.reservationService.deleteReservation(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}
