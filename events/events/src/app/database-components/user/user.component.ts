import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

 users: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }

  getUserList(): User[] {
    return this.users;
  }


  addUser(nameUser: String, surname : String, idPassport: String, cardNum : String, phoneNum: String,
     sex: String, idCountry: number): void {
    nameUser = nameUser.trim();
    idPassport = idPassport.trim();
    cardNum = cardNum.trim();
    phoneNum = phoneNum.trim();
    sex = sex.trim();
    if (!nameUser || !surname) { return; }
    this.userService.addUser({ nameUser, surname, idPassport, cardNum, phoneNum, sex } as User, idCountry)
      .subscribe(user => {
        this.users.push(user);
      });
  }

}
