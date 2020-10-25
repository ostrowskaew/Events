import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/services/evento.service';
import { MessageService } from 'src/app/services/messages.service';
import { Evento } from './evento';


@Component({
  selector: 'app-eventos',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

 eventos: Evento[];

 constructor(private eventoService: EventoService, private messageService: MessageService) {}

 ngOnInit() {
   this.getEventos();
 }

 getEventos(): void {
   this.eventoService.getEventos()
   .subscribe(eventos => this.eventos = eventos);
 }

 getEventoList(): Evento[] {
   return this.eventos;
 }
}

