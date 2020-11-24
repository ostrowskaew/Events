import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { Evento } from 'src/app/database-components/evento/Evento';
import { CurrentUser } from 'src/app/database-components/user/CurrentUser';
import { EventoService } from 'src/app/services/evento.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { SuccessDialogComponent } from 'src/app/success-dialog/success-dialog.component';
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
    private eventoService: EventoService,
    private dialog: MatDialog ) { }

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

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "Are you sure you want to delete event?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log('Yes clicked');
        this.deleteEvento(id);
        this.openInfo();
        }
    });
  }

  openInfo(): void {
    const dialogRef = this.dialog.open(SuccessDialogComponent, {
      width: '350px',
      data: "You deleted the event"
    });

  }
}
