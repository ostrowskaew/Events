import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { tap } from 'rxjs/operators';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { Evento } from 'src/app/database-components/evento/Evento';
import { Reservation } from 'src/app/database-components/reservation/Reservation';
import { CurrentUser } from 'src/app/database-components/user/CurrentUser';
import { User } from 'src/app/database-components/user/user';
import { EventoService } from 'src/app/services/evento.service';
import { ExcelService } from 'src/app/services/excel.service';
import { LanguageService } from 'src/app/services/language.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserDataService } from 'src/app/services/user-data.service';
import { SuccessDialogComponent } from 'src/app/success-dialog/success-dialog.component';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
  reservations : Reservation[];
  currentUser: CurrentUser;
  currentEventId: number;
  users: User[];
  reservation: Reservation;
  lang = "en";


  constructor(private token: TokenStorageService,
    private userService: UserDataService,
    private reservationService: ReservationService,
    public translate: TranslateService,
    private dialog: MatDialog,
    private userDataService: UserDataService,
    private router: Router,
    private excelService: ExcelService,
    private languageService : LanguageService) {
      translate.addLangs(['en', 'pl']);
      translate.setDefaultLang('en');
    }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.getIdReservation();
    this.languageService.Data.subscribe(data => this.lang = data);
    this.reloadData();

  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  getIdReservation() {
    var url = this.router.url;
    var splitted = url.split("/", 3);
    url = splitted[2];
    this.currentEventId = + url;
    console.log(this.currentEventId);
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "Are you sure you want to delete reservation?" + id +"?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log('Yes clicked');
        this.deleteReservation(id);
        this.openInfo();
        }
    });
  }

  async changePaymentStatus(id: number){
    await this.getReservation(id);
    console.log(this.reservation.idReservation);

    if(!this.reservation.payed){
      this.reservation.payed = true
    }
    else{
      this.reservation.payed = false;
    }
    this.addReservation();
    window.location.reload();

  }

  addReservation(){
    this.reservationService.addReservation(this.reservation, this.reservation.event.idEvent, this.reservation.user.idUser)
    .subscribe(data => console.log(data), error => console.log(error));
  }

  getReservation(id: number): Promise<Reservation>{
    return this.reservationService.getReservation(id)
    .pipe(
      tap(data => {
        this.reservation = data;
      }),
    ).toPromise();
  }

  openInfo(): void {
    const dialogRef = this.dialog.open(SuccessDialogComponent, {
      width: '350px',
      data: "You deleted the reservation"
    });

  }

  deleteReservation(id: number) {
    this.reservationService.deleteReservation(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  reloadData() {
    this.reservationService.getReservations()
    .subscribe(res => this.reservations = res);
    this.userDataService.getUsers()
    .subscribe(us => this.users = us);
  }

  downloadExcel(){
      this.excelService.getExcel(this.currentEventId).subscribe(x => {
        const blob = new Blob([x], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})

        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(blob);
          return;
        }
        const data = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = data;
        link.download = 'reservations.xls';
        link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));

      });
  }
}
