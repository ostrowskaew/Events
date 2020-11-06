import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Nationality } from '../database-components/nationality/Nationality';
import { CurrentUser } from '../database-components/user/CurrentUser';
import { User } from '../database-components/user/user';
import { NationalityService } from '../services/nationality.service';
import { TokenStorageService } from '../services/token-storage.service';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-formular-data',
  templateUrl: './formular-data.component.html',
  styleUrls: ['./formular-data.component.css']
})
export class FormularDataComponent implements OnInit {
  currentUser : CurrentUser;
  users: Observable<User[]>;
  submitted = false;
  user: User = new User();
  countries : Observable<Nationality[]>;
  idCountry = 0;
  currUser : Observable<User>;
  currUser2 :  User;

  constructor(private userService: UserDataService,
    private token: TokenStorageService,
    private nationalityService: NationalityService) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.reloadData();
  }


  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }


  save() {
    this.user.idUser = this.currentUser.id;
    this.userService.addUser(this.user, this.idCountry)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  reloadData() {
    this.users = this.userService.getUsers();
    this.countries = this.nationalityService.getNationalities();
    this.currUser = this.userService.getUser(this.currentUser.id);
  }


}
