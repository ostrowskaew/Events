import { Component, OnInit } from '@angular/core';
import { Evento } from './evento';


@Component({
  selector: 'app-eventos',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

 eventos: Evento[];

  constructor() {}

  ngOnInit() {
  }



}
