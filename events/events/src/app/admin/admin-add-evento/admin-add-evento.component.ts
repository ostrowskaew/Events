import { Component, OnInit } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { EventoService } from 'src/app/services/evento.service';
import { Evento } from 'src/app/database-components/evento/Evento';
import { MessageService } from 'src/app/services/messages.service';
import { Observable } from 'rxjs';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

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
  idImage: number;

  constructor(
    public translate: TranslateService,
    private eventoService: EventoService,
    private router: Router
  ) {
    translate.addLangs(['en', 'pl']);
    translate.setDefaultLang('en');
  }



  ngOnInit(): void {
   this.reloadData();
   this.idImage = 0;
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  refreshPage(): void {
    window.location.reload();
  }

  async save() {
    this.evento.dateStart = new Date(this.dateStart.year, this.dateStart.month -1, this.dateStart.day + 1 )
    this.evento.dateEnd = new Date(this.dateEnd.year, this.dateEnd.month -1, this.dateEnd.day + 1 )
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.evento.imageId = this.idImage;
    this.eventoService.addEvento(this.evento)
      .subscribe(data => console.log(data), error => console.log(error));
    this.evento = new Evento();
    this.router.navigate(['/admin']);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  reloadData() {
    this.eventos = this.eventoService.getEventos();
  }

  idChangedHandler(id: number) {
    this.idImage = id;
  }
}
