import { EventoService } from 'src/app/services/evento.service';
import { EventoEs } from '../evento/EventoEs';
export class Evento {
  idEvent : number;
  nameEvent : string;
  dateStart : Date;
  dateEnd : Date;
  meetingPlace: string;
  numPlaces: number;
  included: string;
  notIncluded: string;
  schedule: string;
  description: string;
  imageId: number;
  price: number;
  eventEs : EventoEs;
}
