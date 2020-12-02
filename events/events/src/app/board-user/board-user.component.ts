import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../database-components/evento/Evento';
import { Reservation } from '../database-components/reservation/Reservation';
import { CurrentUser } from '../database-components/user/CurrentUser';
import { User } from '../database-components/user/user';
import { EventoService } from '../services/evento.service';
import { ReservationService } from '../services/reservation.service';
import { TokenStorageService } from '../services/token-storage.service';
import { UserDataService } from '../services/user-data.service';
import { UserService } from '../services/user.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  currentUser: CurrentUser;
  currUser : User;
  reservations : Reservation[];
  events: Evento[];


  constructor(private token: TokenStorageService,
    public translate: TranslateService,
    private userService: UserDataService,
    private reservationService: ReservationService,
    private eventoService: EventoService) {

    }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.getUser();
    this.reloadData();
  }

  getUser() {
    this.userService.getUser(this.currentUser.id).subscribe((res: User) => {
      this.currUser = res;
    });
  }

  reloadData() {
    this.eventoService.getEventos()
    .subscribe(ev => this.events = ev);
    this.reservationService.getReservations()
    .subscribe(res => this.reservations = res);

  }


}
