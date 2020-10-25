import { Evento } from '../evento/Evento';
import { User } from '../user/User';

export class Reservation {
  idReservation: number;
  payed: boolean;
  evento: Evento;
  user: User;
}
