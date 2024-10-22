import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Nationality } from '../database-components/nationality/Nationality';
import { CurrentUser } from '../database-components/user/CurrentUser';
import { User } from '../database-components/user/user';
import { NationalityService } from '../services/nationality.service';
import { TokenStorageService } from '../services/token-storage.service';
import { UserDataService } from '../services/user-data.service';
import { Location } from '@angular/common'
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-formular-data',
  templateUrl: './formular-data.component.html',
  styleUrls: ['./formular-data.component.css']
})
export class FormularDataComponent implements OnInit {
  currentUser : CurrentUser;
  currUser : User;
  countries : Observable<Nationality[]>;
  user: User = new User();
  submitted = false;
  idCountry = 0;
  isSuccessful = false;
  isSignUpFailed = false;
  form: any = {};
  errorMessage = '';
  lang = 'en';


  constructor(private userService: UserDataService,
    private token: TokenStorageService,
    private nationalityService: NationalityService,
    private location: Location,
    public translate: TranslateService,
    public languageService: LanguageService
  ) {

  }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.newUser();
    this.languageService.Data.subscribe(data => this.lang = data);
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
    this.form.idUser = this.currentUser.id;

    this.userService.addUser(this.form, this.idCountry)
      .subscribe(
        data => {
          console.log(data);
          console.log(this.idCountry);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.location.back();
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );

  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  reloadData() {
    this.countries = this.nationalityService.getNationalities();
    this.getUser();
  }


}
