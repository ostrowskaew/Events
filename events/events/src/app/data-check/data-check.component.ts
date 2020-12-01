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
import { tap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

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
  avaiblePlaces: number;
  reservationNumber : number;
  lang = 'en';

  constructor(
    private router: Router,
    private eventoService: EventoService,
    private token: TokenStorageService,
    private userService: UserDataService,
    private reservationService: ReservationService,
    private dialog: MatDialog,
    public translate: TranslateService,
    public languageService : LanguageService
    ) {
    }


    async ngOnInit() {
      this.currentUser = this.token.getUser();
      this.getId();
      this.languageService.Data.subscribe(data => this.lang = data);
       await this.getEvent();
       this.getUser();
       await this.countReservations();
    this.countAvaiblePlaces();
    }


  getId() {
    this.url = this.router.url;
    var splitted = this.url.split("/", 3);
    this.url = splitted[2];
    this.id = + this.url;

  }

  getEvent(): Promise<Evento> {
    return this.eventoService.getEvento(this.id).pipe(
      tap(data => {
        this.event = data;
      }),
    ).toPromise();

  }

  countReservations() :Promise<number>{
    return this.reservationService.countReservationsByEvent(this.id).pipe(
      tap(data => {
        this.reservationNumber = data;
      }),
    ).toPromise();
  }

  countAvaiblePlaces(){
    this.avaiblePlaces = this.event.numPlaces - this.reservationNumber;
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
      && this.currUser.phoneNum != null
      && this.avaiblePlaces != 0){
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
  else if(this.avaiblePlaces == 0 ){
    this.openInfo("Sorry! No places avaible")
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
