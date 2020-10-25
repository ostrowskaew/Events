import { Component, OnInit } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { EventoService } from 'src/app/services/evento.service';
import { Evento } from 'src/app/database-components/evento/Evento';
import { MessageService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-admin-add-evento',
  templateUrl: './admin-add-evento.component.html',
  styleUrls: ['./admin-add-evento.component.css']
})

export class AdminAddEventoComponent implements OnInit {
  eventos: Evento[];
  idEvento : string;

  constructor(
    public translate: TranslateService,
    private eventoService: EventoService,
    private messageService: MessageService
  ) {
    translate.addLangs(['en', 'pl']);
    translate.setDefaultLang('en');
  }



  ngOnInit(): void {
   this.getEventos();
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  refreshPage(): void {
    window.location.reload();
  }

  getEventos(): void {
    this.eventoService.getEventos()
    .subscribe(eventos => this.eventos = eventos);
  }

/*
  addEvento(nameEvento: string, dateStart: Date, dateEnd: Date, meetingPlace: string, numPlaces : number,
    included : string, notIncluded: string, schedule : string, description: string): void {
    let idEvento = this.idEvento = '0';
    if (!nameEvento || !numPlaces) { return; }
    this.eventoService.addEvento({ idEvento, nameEvento,
        dateStart, dateEnd, meetingPlace, numPlaces,
        included, notIncluded, schedule, description
      } as Evento)
      .subscribe(evento => {
        this.eventos.push(evento);
      });
  }
*/
}
