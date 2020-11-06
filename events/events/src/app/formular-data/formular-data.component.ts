import { NgIf } from '@angular/common';
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
  countries : Observable<Nationality[]>;
  user: User = new User();
  currUser : User;
  submitted = false;
  idCountry = 0;

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

  getUser() {
    this.userService.getUser(this.currentUser.id).subscribe((res: User) => {
      this.currUser = res;
    });
  }

  save() {
    if(this.user.nameUser == null)
      this.user.nameUser = this.currUser.nameUser;

    if(this.user.surname == null)
      this.user.surname = this.currUser.surname;

    if(this.user.cardNum == null)
      this.user.cardNum = this.currUser.cardNum;

    if(this.user.idPassport == null)
      this.user.idPassport = this.currUser.idPassport;

    if(this.user.sex == null)
      this.user.sex = this.currUser.sex;

    if(this.user.phoneNum == null)
      this.user.phoneNum = this.currUser.phoneNum;

    if(this.user.nationality == null)
      this.user.nationality = this.currUser.nationality;

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
    this.getUser();
  }


}
