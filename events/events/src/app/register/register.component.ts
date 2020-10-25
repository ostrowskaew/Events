import { Component, OnInit } from '@angular/core';
import { User } from '../database-components/user/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  refreshPage(): void {
    window.location.reload();
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }
/*
  addUser(email : String, password: String): void {
    email = email.trim();
    password = password.trim();
    if (!email || !password ) { return; }
    this.userService.addUser({ email, password} as User)
    .subscribe( user => {
    this.users.push(user);
    });
}
*/


}
