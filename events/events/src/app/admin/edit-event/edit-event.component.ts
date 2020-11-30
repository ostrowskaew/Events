import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { Evento } from 'src/app/database-components/evento/Evento';
import { EventoService } from 'src/app/services/evento.service';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { SuccessDialogComponent } from 'src/app/success-dialog/success-dialog.component';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  event: Evento;
  id: number;
  url : string;
  copyEvent: Evento;
  nameChange =false;
  startDateChange = false;
  endDateChange = false;
  meetingPlaceChange = false;
  numPlacesChange = false;
  priceChange = false;
  notIncludedChange = false;
  includedChange = false;
  scheduleChange = false;
  descriptionChange = false;
  imageChange = false;
  dateStart: NgbDate;
  dateEnd: NgbDate;
  idImage: number;

  constructor(

    private router: Router,
    private eventoService: EventoService,
    public translate: TranslateService,
    private uploadService: UploadFileService,
    private dialog :MatDialog) {
      translate.addLangs(['en', 'pl']);
      translate.setDefaultLang('en');
    }

  ngOnInit(): void {
   this.getId();
   this.getEvent();
  }

  getId() {
    this.url = this.router.url;
    var splitted = this.url.split("/", 3);
    this.url = splitted[2];
    this.id = + this.url;
  }

  getEvent(): void {
    this.eventoService.getEvento(this.id)
    .subscribe(ev => this.event = ev);

  }

  copyEventData(){
    this.copyEvent = new Evento();
    this.copyEvent.idEvent = this.event.idEvent;
    this.copyEvent.nameEvent = this.event.nameEvent;
    this.copyEvent.dateStart = this.event.dateStart;
    this.copyEvent.dateEnd = this.event.dateEnd;
    this.copyEvent.numPlaces = this.event.numPlaces;
    this.copyEvent.meetingPlace = this.event.meetingPlace;
    this.copyEvent.included = this.event.included;
    this.copyEvent.notIncluded = this.event.notIncluded;
    this.copyEvent.schedule = this.event.schedule;
    this.copyEvent.description = this.event.description;
    this.copyEvent.imageId = this.event.imageId;
  }

  save() {
    this.eventoService.addEvento(this.copyEvent)
      .subscribe(
        data => {
          console.log(data);
        },
        err => {
          console.log(err);
        }
      );
  }

  changeNameFun() {
    if (!this.nameChange){
      this.copyEventData();
      this.nameChange = true;
    }
    else {
      this.save();
      this.nameChange = false;
      window.location.reload();
    }
  }

  changeMeetingPlaceFun() {
    if (!this.meetingPlaceChange){
      this.copyEventData();
      this.meetingPlaceChange = true;
    }
    else {
      this.save();
      this.meetingPlaceChange = false;
      window.location.reload();
    }
  }

  changePlaceNumFun() {
    if (!this.numPlacesChange){
      this.copyEventData();
      this.numPlacesChange = true;
    }
    else {
      this.save();
      this.numPlacesChange = false;
      window.location.reload();
    }
  }

  changeInPriceFun() {
    if (!this.includedChange){
      this.copyEventData();
      this.includedChange = true;
    }
    else {
      this.save();
      this.includedChange = false;
      window.location.reload();
    }
  }

  changeNotInPriceFun() {
    if (!this.notIncludedChange){
      this.copyEventData();
      this.notIncludedChange = true;
    }
    else {
      this.save();
      this.notIncludedChange = false;
      window.location.reload();
    }
  }

  changePriceFun() {
    if (!this.priceChange){
      this.copyEventData();
      this.priceChange = true;
    }
    else {
      this.save();
      this.priceChange = false;
      window.location.reload();
    }
  }

  changeScheduleFun() {
    if (!this.scheduleChange){
      this.copyEventData();
      this.scheduleChange = true;
    }
    else {
      this.save();
      this.scheduleChange = false;
      window.location.reload();
    }
  }

  changeDescriptionFun() {
    if (!this.descriptionChange){
      this.copyEventData();
      this.descriptionChange = true;
    }
    else {
      this.save();
      this.descriptionChange = false;
      window.location.reload();
    }
  }

  changeDateStartFun() {
    if (!this.startDateChange){
      this.copyEventData();
      this.startDateChange = true;
    }
    else {
      this.checkIfDateStartIsCorrect();
      this.startDateChange = false;
      window.location.reload();
    }
  }

  changeDateEndFun() {
    if (!this.endDateChange){
      this.copyEventData();
      this.endDateChange = true;
    }
    else {
      this.checkIfDateEndtIsCorrect();
      this.endDateChange = false;
      window.location.reload();
    }
  }

  checkIfDateStartIsCorrect(){
    var today = new Date();
    var dateStart = new Date(this.dateStart.year, this.dateStart.month -1, this.dateStart.day + 1 );

    if(dateStart <= today) {
      this.openInfo("Upssss. Date cannot be earlier than tomorrow");
      }
    else{
      this.copyEvent.dateStart = new Date(this.dateStart.year, this.dateStart.month -1, this.dateStart.day )
      this.save();
    }
  }

  openInfo(message: string): void {
    const dialogRef = this.dialog.open(SuccessDialogComponent, {
      width: '350px',
      data: message
    });

  }

  checkIfDateEndtIsCorrect(){
    var today = new Date();
    var dateStart = this.event.dateStart;
    var dateEnd = new Date(this.dateEnd.year, this.dateEnd.month -1, this.dateEnd.day + 1 );

    if(dateEnd <= today) {
      this.openInfo("Upssss. Date cannot be earlier than tomorrow");
      }
    else if(dateEnd < dateStart){
      this.openInfo("Upssss. Date when event starts cannot be later than when it ends")
    }
    else{
      this.copyEvent.dateEnd = new Date(this.dateEnd.year, this.dateEnd.month -1, this.dateEnd.day )
      this.save();
    }
  }


  changeImageFun() {
    if (!this.imageChange){
      this.copyEventData();
      this.imageChange = true;
    }
    else {
      this.save();
      this.imageChange = false;
      window.location.reload();
    }
  }

  idChangedHandler(id: number) {
    this.uploadService.deleteFiles(this.copyEvent.imageId);
    this.copyEvent.imageId = id;
  }
}
