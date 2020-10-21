import { User } from '../user/User';

export interface Reservation {
  idReservation: number;
  payed: boolean,
  event: Event;
  user: User;
}
