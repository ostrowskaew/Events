import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { tap } from 'rxjs/operators';
import { Evento } from 'src/app/database-components/evento/Evento';
import { EventoEs } from 'src/app/database-components/evento/EventoEs';
import { EventoEsService } from 'src/app/services/evento-es.service';
import { EventoService } from 'src/app/services/evento.service';
import { SuccessDialogComponent } from 'src/app/success-dialog/success-dialog.component';

@Component({
  selector: 'app-add-evento-es',
  templateUrl: './add-evento-es.component.html',
  styleUrls: ['./add-evento-es.component.css']
})
export class AddEventoEsComponent implements OnInit {
  submitted = false;
  eventoEs: EventoEs = new EventoEs();
  evento: Evento = new Evento();
  url : string;
  idEventEs: number;
  idEvent: number;

  constructor(
    private eventoEsService: EventoEsService,
    private eventoService: EventoService,
    private dialog: MatDialog,
    private router: Router,
    public translate: TranslateService) { }

 async ngOnInit() {
    this.getId();
    this.idEvent = this.idEventEs + 1;
    await this.getEventEs();
  }

  getId() {
    this.url = this.router.url;
    var splitted = this.url.split("/", 3);
    this.url = splitted[2];
    this.idEventEs = + this.url;
    console.log(this.idEventEs);
  }


    getEventEs() : Promise<EventoEs>{
      return this.eventoEsService.getEvento(this.idEventEs)
      .pipe(
        tap(data => {
          this.eventoEs = data;
        }),
      ).toPromise();
    }

  refreshPage(): void {
    window.location.reload();
  }

  async onSubmit() {
    this.submitted = true;
    await this.save();
  }

  openInfo(message: string): void {
    const dialogRef = this.dialog.open(SuccessDialogComponent, {
      width: '350px',
      data: message
    });

  }

  async save
  () {
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.eventoEsService.addEvento(this.eventoEs)
    .toPromise();
    this.openInfo("You saved event successfully");
    this.router.navigate(['/admin']);
  }





}
