import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Nationality } from '../database-components/nationality/Nationality';
import { CurrentUser } from '../database-components/user/CurrentUser';
import { User } from '../database-components/user/user';
import { LanguageService } from '../services/language.service';
import { NationalityService } from '../services/nationality.service';

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
  countries : Observable<Nationality[]>;
  currUser : User;
  copyUser: User;
  changeName = false;
  surnameChange = false;
  idPassportChaneg = false;
  cardNumChange = false;
  phoneNumChange = false;
  sexChange = false;
  nationalityChange = false;
  lang: string = 'en';

  constructor(private token: TokenStorageService,
    private userService: UserDataService,
    private nationalityService: NationalityService,
    public translate: TranslateService,
    public languageService: LanguageService
  ) {
  }

  ngOnInit() {
    this.reloadData();
    this.languageService.Data.subscribe(data => this.lang = data);
    console.log(this.lang);
  }

  reloadData(){
    this.currentUser = this.token.getUser();
    this.users = this.userService.getUsers();
    this.countries = this.nationalityService.getNationalities();
    this.getUser();
  }

  getUser() {
    this.userService.getUser(this.currentUser.id).subscribe((res: User) => {
      this.currUser = res;
    });
  }


  copyUserData(){
    this.copyUser = new User();
    this.copyUser.idUser = this.currUser.idUser;
    this.copyUser.nameUser = this.currUser.nameUser;
    this.copyUser.surname = this.currUser.surname;
    this.copyUser.idPassport = this.currUser.idPassport;
    this.copyUser.cardNum = this.currUser.cardNum;
    this.copyUser.phoneNum = this.currUser.phoneNum;
    this.copyUser.sex = this.currUser.sex;
    this.copyUser.nationality = this.currUser.nationality;
    console.log(this.copyUser.nameUser);
    console.log(this.copyUser.idUser);
  }

  save() {
    this.userService.addUser(this.copyUser, this.copyUser.nationality.idNationality)
      .subscribe(
        data => {
          console.log(data);
        },
        err => {
          console.log(err);
        }
      );
  }

  changeNameFun() {
    if (!this.changeName){
      this.copyUserData();
      this.changeName = true;
    }
    else {
      this.save();
      this.changeName = false;
      window.location.reload();
    }
  }

  changeSurnameFun() {
    if (!this.surnameChange){
      this.copyUserData();
      this.surnameChange = true;
    }
    else {
      this.save();
      this.surnameChange = false;
      window.location.reload();
    }
  }

  changeIdPassportFun() {
    if (!this.idPassportChaneg){
      this.copyUserData();
      this.idPassportChaneg = true;
    }
    else {
      this.save();
      this.idPassportChaneg = false;
      window.location.reload();
    }
  }

  changePhoneNumFun() {
    if (!this.phoneNumChange){
      this.copyUserData();
      this.phoneNumChange = true;
    }
    else {
      this.save();
      this.phoneNumChange = false;
      window.location.reload();
    }
  }

  changeCardNumFun() {
    if (!this.cardNumChange){
      this.copyUserData();
      this.cardNumChange = true;
    }
    else {
      this.save();
      this.cardNumChange = false;
      window.location.reload();
    }
  }

  changeSexFun() {
    if (!this.sexChange){
      this.copyUserData();
      this.sexChange = true;
    }
    else {
      this.save();
      this.sexChange = false;
      window.location.reload();
    }
  }

  changeNationalityFun() {
    if (!this.nationalityChange){
      this.copyUserData();
      this.nationalityChange = true;
    }
    else {
      this.save();
      this.nationalityChange = false;
      window.location.reload();
    }
  }

}
