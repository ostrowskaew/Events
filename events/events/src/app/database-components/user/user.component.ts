import { Component, OnInit, ɵCurrencyIndex } from '@angular/core';
import { User } from './user';
import { CurrentUser } from './CurrentUser';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  tok = this.token.getToken();
  currentUser : CurrentUser;
  id : number;
  users: Observable<User[]>;
  submitted = false;
  user: User = new User();

  constructor(private userService: UserService, private token: TokenStorageService) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.id = this.currentUser.id;
    this.reloadData();
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.user.idUser = this.currentUser.id;
    this.user.email = this.currentUser.email;
    this.user.username = this.currentUser.username;
    this.user.password ='Bearer ' + this.token.getToken();
    this.userService.addUser(this.user, 0)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  reloadData() {
    this.users = this.userService.getUsers();
  }

  deleteUser(idUser: number) {
    this.userService.deleteUser(idUser)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}
