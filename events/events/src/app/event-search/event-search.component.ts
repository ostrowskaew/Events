import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Evento } from '../database-components/evento/Evento';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.css']
})
export class EventSearchComponent implements OnInit {

  eventos$: Observable<Evento[]>;
  private searchTerms = new Subject<string>();

  constructor(private eventService: EventoService,
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'pl']);
    translate.setDefaultLang('en');
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.eventos$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.eventService.searchEvent(term)),
    );
  }

}
