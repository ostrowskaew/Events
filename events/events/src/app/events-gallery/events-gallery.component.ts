import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Evento } from '../database-components/evento/Evento';
import { EventoService } from '../services/evento.service';
import { LanguageService } from '../services/language.service';
import { UploadFileService } from '../services/upload-file.service';

@Component({
  selector: 'app-events-gallery',
  templateUrl: './events-gallery.component.html',
  styleUrls: ['./events-gallery.component.css']
})
export class EventsGalleryComponent implements OnInit {

  constructor(private eventService: EventoService,
    private uploadService: UploadFileService,
    public translate: TranslateService,
    public languageService: LanguageService
  ) {
  }

  events: Evento[] = [];
  fileInfos: Observable<any>;
  today: Date = new Date();
  lang = 'en';

  ngOnInit(){
    this.fileInfos = this.uploadService.getFiles();
    this.languageService.Data.subscribe(data => this.lang = data);
    this.getMovies();
  }

  getMovies(): void {
    this.eventService.getEventos()
      .subscribe(ev => this.events = ev);
  }
}
