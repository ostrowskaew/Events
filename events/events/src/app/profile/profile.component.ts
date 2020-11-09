import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUser } from '../database-components/user/CurrentUser';
import { User } from '../database-components/user/user';

import { TokenStorageService } from '../services/token-storage.service';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: CurrentUser;
  users: Observable<User[]>;
  currUser : User;

  constructor(private token: TokenStorageService,
    private userService: UserDataService) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.users = this.userService.getUsers();
    this.getUser();
  }

  getUser() {
    this.userService.getUser(this.currentUser.id).subscribe((res: User) => {
      this.currUser = res;
    });
  }
}
