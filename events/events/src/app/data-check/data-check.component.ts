import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Evento } from '../database-components/evento/Evento';
import { Reservation } from '../database-components/reservation/Reservation';
import { CurrentUser } from '../database-components/user/CurrentUser';
import { User } from '../database-components/user/user';
import { EventoService } from '../services/evento.service';
import { ReservationService } from '../services/reservation.service';
import { TokenStorageService } from '../services/token-storage.service';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-data-check',
  templateUrl: './data-check.component.html',
  styleUrls: ['./data-check.component.css']
})
export class DataCheckComponent implements OnInit {

  event: Evento;
  id: number;
  url : string;
  currentUser: CurrentUser;
  users: Observable<User[]>;
  currUser : User;
  reservation: Reservation;

  constructor(
    private router: Router,
    private eventoService: EventoService,
    private token: TokenStorageService,
    private userService: UserDataService,
    private reservationService: ReservationService) { }



  getId() {
    this.url = this.router.url;
    var splitted = this.url.split("/", 3);
    this.url = splitted[2];
    this.id = + this.url;
  }

  getEvent(): void {
    this.eventoService.getEvento(this.id)
    .subscribe(ev => this.event = ev);

  }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.users = this.userService.getUsers();
    this.getUser();
    this.getId();
    this.getEvent();
  }

  getUser() {
    this.userService.getUser(this.currentUser.id).subscribe((res: User) => {
      this.currUser = res;
    });
  }

  makeReservation() {
    this.reservation = new Reservation();
    this.reservationService.addReservation(this.reservation, this.id, this.currUser.idUser)
    .subscribe(data => console.log(data), error => console.log(error));
  }

}
