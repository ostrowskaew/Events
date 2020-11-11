import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from 'src/app/database-components/evento/Evento';
import { CurrentUser } from 'src/app/database-components/user/CurrentUser';
import { EventoService } from 'src/app/services/evento.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  currentUser: CurrentUser;
  eventos: Observable<Evento[]>;

  constructor(private token: TokenStorageService,
    private eventoService: EventoService ) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.reloadData();

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
