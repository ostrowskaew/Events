import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';

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
    private reservationService: ReservationService,
    private dialog: MatDialog) { }



    ngOnInit() {
      this.currentUser = this.token.getUser();
      this.getId();
       this.getEvent();
       this.getUser();
    }


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

  openDialog(): void {

    if(this.currUser.nameUser
      && this.currUser.surname != null
      && this.currUser.cardNum != null
      && this.currUser.idPassport != null
      && this.currUser.nationality != null
      && this.currUser.phoneNum != null){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "Are you sure you want to make a reservation?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log('Yes clicked');
        this.makeReservation();
        this.openInfo("You signed up successfuly for the event !");
        }
    });
  }
  else {
    this.openInfo("Incorrect data. Fill all your data to make a reservation!")
  }
  }

  openInfo(message: string): void {
    const dialogRef = this.dialog.open(SuccessDialogComponent, {
      width: '350px',
      data: message
    });

  }


}
