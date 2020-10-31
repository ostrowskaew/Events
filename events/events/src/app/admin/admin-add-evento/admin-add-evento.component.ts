import { Component, OnInit } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { EventoService } from 'src/app/services/evento.service';
import { Evento } from 'src/app/database-components/evento/Evento';
import { MessageService } from 'src/app/services/messages.service';
import { Observable } from 'rxjs';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-add-evento',
  templateUrl: './admin-add-evento.component.html',
  styleUrls: ['./admin-add-evento.component.css']
})

export class AdminAddEventoComponent implements OnInit {
  eventos: Observable<Evento[]>;
  submitted = false;
  evento: Evento = new Evento();
  dateStart: NgbDate;
  dateEnd: NgbDate;

  constructor(
    public translate: TranslateService,
    private eventoService: EventoService,
    private messageService: MessageService
  ) {
    translate.addLangs(['en', 'pl']);
    translate.setDefaultLang('en');
  }



  ngOnInit(): void {
   this.reloadData();
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  refreshPage(): void {
    window.location.reload();
  }

  save() {
    this.evento.dateStart = new Date(this.dateStart.year, this.dateStart.month -1, this.dateStart.day + 1 )
    this.evento.dateEnd = new Date(this.dateEnd.year, this.dateEnd.month -1, this.dateEnd.day + 1 )
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

}
