import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { Evento } from 'src/app/database-components/evento/Evento';
import { Reservation } from 'src/app/database-components/reservation/Reservation';
import { CurrentUser } from 'src/app/database-components/user/CurrentUser';
import { User } from 'src/app/database-components/user/user';
import { EventoService } from 'src/app/services/evento.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserDataService } from 'src/app/services/user-data.service';
import { SuccessDialogComponent } from 'src/app/success-dialog/success-dialog.component';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
  reservations : Reservation[];
  currentUser: CurrentUser;
  currentEventId: number;
  users: User[];


  constructor(private token: TokenStorageService,
    private userService: UserDataService,
    private reservationService: ReservationService,
    private dialog: MatDialog,
    private userDataService: UserDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.getIdReservation();
    this.reloadData();

  }

  getIdReservation() {
    var url = this.router.url;
    var splitted = url.split("/", 3);
    url = splitted[2];
    this.currentEventId = + url;
    console.log(this.currentEventId);
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "Are you sure you want to delete reservation?" + id +"?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log('Yes clicked');
        this.deleteReservation(id);
        this.openInfo();
        }
    });
  }

  openInfo(): void {
    const dialogRef = this.dialog.open(SuccessDialogComponent, {
      width: '350px',
      data: "You deleted the reservation"
    });

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

  reloadData() {
    this.reservationService.getReservations()
    .subscribe(res => this.reservations = res);
    this.userDataService.getUsers()
    .subscribe(us => this.users = us);
  }
}
