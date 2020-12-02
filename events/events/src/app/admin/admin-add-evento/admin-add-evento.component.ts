import { Component, OnInit } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { EventoService } from 'src/app/services/evento.service';
import { Evento } from 'src/app/database-components/evento/Evento';
import { MessageService } from 'src/app/services/messages.service';
import { Observable } from 'rxjs';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'src/app/success-dialog/success-dialog.component';
import { EventoEsService } from 'src/app/services/evento-es.service';

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
  idEventEs: number;


  constructor(
    private eventoService: EventoService,
    private router: Router,
    private dialog: MatDialog,
    public translate: TranslateService,
    public eventoEsService: EventoEsService
  ) {
  }



  ngOnInit(): void {
   this.reloadData();
   this.idImage = 0;
  }

  checkIfDateIsCorrect(){
    var today = new Date();
    var dateStart = new Date(this.dateStart.year, this.dateStart.month -1, this.dateStart.day + 1 );
    var dateEnd = new Date(this.dateEnd.year, this.dateEnd.month -1, this.dateEnd.day + 1 );

    if(dateStart <= today) {
      this.openInfo("Upssss. Date cannot be earlier than tomorrow");
      }
    else if(dateEnd < dateStart){
      this.openInfo("Upssss. Date when event starts cannot be later than when it ends")
    }
    else{
      this.save();
    }
  }


  refreshPage(): void {
    window.location.reload();
  }

  async save() {

    if(this.idImage != 0 && isNaN(this.evento.numPlaces)  && isNaN(this.evento.price)){
      this.evento.dateStart = new Date(this.dateStart.year, this.dateStart.month -1, this.dateStart.day + 1 )
      this.evento.dateEnd = new Date(this.dateEnd.year, this.dateEnd.month -1, this.dateEnd.day + 1 )
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.evento.imageId = this.idImage;
      this.eventoService.addEvento(this.evento)
        .subscribe(data => this.idEventEs = data, error => console.log(error));
      this.idEventEs = this.idImage + 1
      this.router.navigate(['/add-event-es/'+this.idEventEs]);
    }
    else if(this.idImage ==0){
      this.openInfo("Adding image is required!")
    }
    else {
      this.openInfo("Data is incorrect!")
    }

  }

  onSubmit() {
    this.submitted = true;
    this.checkIfDateIsCorrect();
  }

  reloadData() {
    this.eventos = this.eventoService.getEventos();
  }

  idChangedHandler(id: number) {
    this.idImage = id;
  }

  openInfo(message: string): void {
    const dialogRef = this.dialog.open(SuccessDialogComponent, {
      width: '350px',
      data: message
    });

  }
}
