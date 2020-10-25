import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: Observable<User[]>;
  submitted = false;
  user: User = new User();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.reloadData();
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
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
