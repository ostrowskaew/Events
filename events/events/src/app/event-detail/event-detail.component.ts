import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, ParamMap, Params, PRIMARY_OUTLET, Router, RouterStateSnapshot, UrlSegment, UrlSegmentGroup, UrlTree } from '@angular/router';
import { Evento } from '../database-components/evento/Evento';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: Evento;
  id: number;
  url : string;

  constructor(
    private router: Router,
    private eventoService: EventoService) { }

  ngOnInit(): void {
   this.getId();
   this.getEvent();
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
}
