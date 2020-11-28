import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, ParamMap, Params, PRIMARY_OUTLET, Router, RouterStateSnapshot, UrlSegment, UrlSegmentGroup, UrlTree } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Evento } from '../database-components/evento/Evento';
import { ReservationComponent } from '../database-components/reservation/reservation.component';
import { EventoService } from '../services/evento.service';
import { ReservationService } from '../services/reservation.service';

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

  constructor(
    private router: Router,
    private eventoService: EventoService,
    private reservationService: ReservationService) { }

  async ngOnInit() {
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

  countReservations() :Promise<Number>{
    return this.reservationService.countReservationsByEvent(this.id).pipe(
      tap(data => {
        this.reservationNumber = data;
      }),
    ).toPromise();


  }
}
