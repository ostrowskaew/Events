import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../database-components/reservation/Reservation';
import { CurrentUser } from '../database-components/user/CurrentUser';
import { User } from '../database-components/user/user';
import { ReservationService } from '../services/reservation.service';
import { TokenStorageService } from '../services/token-storage.service';
import { UserDataService } from '../services/user-data.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  currentUser: CurrentUser;
  users: Observable<User[]>;
  currUser : User;
  reservations : Observable<Reservation[]>;


  constructor(private token: TokenStorageService,
    private userService: UserDataService,
    private reservationService: ReservationService) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.users = this.userService.getUsers();
    this.reservations = this.reservationService.getReservations();
    this.getUser();
  }

  getUser() {
    this.userService.getUser(this.currentUser.id).subscribe((res: User) => {
      this.currUser = res;
    });
  }
}
