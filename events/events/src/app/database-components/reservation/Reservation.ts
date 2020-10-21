import { User } from '../user/User';

export interface Reservation {
  idReservation: number;
  event: Event;
  user: User;
}
