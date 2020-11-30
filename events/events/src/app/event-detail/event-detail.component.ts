import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ActivatedRouteSnapshot, ParamMap, Params, PRIMARY_OUTLET, Router, RouterStateSnapshot, UrlSegment, UrlSegmentGroup, UrlTree } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { tap } from 'rxjs/operators';
import { Evento } from '../database-components/evento/Evento';
import { ReservationComponent } from '../database-components/reservation/reservation.component';
import { CurrentUser } from '../database-components/user/CurrentUser';
import { EventoService } from '../services/evento.service';
import { ReservationService } from '../services/reservation.service';
import { TokenStorageService } from '../services/token-storage.service';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: Evento;
  id: number;
  url : string;
  reservationNumber: number;
  avaiblePlaces: number;
  currentUser: CurrentUser;

  constructor(
    private router: Router,
    private eventoService: EventoService,
    private reservationService: ReservationService,
    private token: TokenStorageService,
    private dialog: MatDialog,
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'pl']);
    translate.setDefaultLang('en');
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }


  async ngOnInit() {
    this.currentUser = this.token.getUser();
   this.getId();
   await this.getEvent();
   await this.countReservations();
   this.countAvaiblePlaces();

  }

  countAvaiblePlaces(){
    this.avaiblePlaces = this.event.numPlaces - this.reservationNumber;
  }

  getId() {
    this.url = this.router.url;
    var splitted = this.url.split("/", 3);
    this.url = splitted[2];
    this.id = + this.url;
  }

  getEvent(): Promise<Evento> {
    return this.eventoService.getEvento(this.id)
    .pipe(
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

  openInfo(message: string): void {
    const dialogRef = this.dialog.open(SuccessDialogComponent, {
      width: '350px',
      data: message
    });

  }

  signUpCheck(){
    if((this.currentUser != null) && (this.avaiblePlaces != 0 )) {
      this.router.navigate(['data-check/'+ this.id]);
    }
    else{
      if (!this.currentUser) {
        this.openInfo("Log in to sign up for the event!");
      }
      else {
        this.openInfo("Sorry! No places avaible");
      }

    }
  }
}
