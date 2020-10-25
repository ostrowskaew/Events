import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventoService } from 'src/app/services/evento.service';
import { MessageService } from 'src/app/services/messages.service';
import { Evento } from './Evento';


@Component({
  selector: 'app-eventos',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  eventos: Observable<Evento[]>;
  submitted = false;
  evento: Evento = new Evento();

  constructor(private eventoService: EventoService) { }

  ngOnInit() {
    this.reloadData();
  }

  newEvento(): void {
    this.submitted = false;
    this.evento = new Evento();
  }

  save() {
    this.eventoService.addEvento(this.evento)
      .subscribe(data => console.log(data), error => console.log(error));
    this.evento = new Evento();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  reloadData() {
    this.eventos = this.eventoService.getEventos();
  }

  deleteEvento(id: number) {
    this.eventoService.deleteEvento(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}

