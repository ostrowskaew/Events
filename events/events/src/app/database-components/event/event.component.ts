import { Component, OnInit } from '@angular/core';
import { Event } from './event';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

 events: Event[];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this.eventService.getEvents()
    .subscribe(events => this.events = events);
  }

  getEventList(): Event[] {
    return this.events;
  }


  addEvent(nameEvent: String, dateStart: Date, dateEnd: Date, meetingPlace: String, numPlaces: Number,
    schedule: String, included : String, notIncluded : String, description: String): void {
    nameEvent = nameEvent.trim();
    if (!nameEvent || !numPlaces) { return; }
    this.eventService.addEvent({nameEvent, dateStart, dateEnd, meetingPlace, numPlaces, included, notIncluded, schedule, description} as Event)
      .subscribe(event => {
        this.events.push(event);
      });
  }

}
