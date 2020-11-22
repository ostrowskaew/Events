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

  constructor(private userService: UserDataService,
    private token: TokenStorageService,
    private nationalityService: NationalityService,
    private location: Location) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.newUser();
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
    this.user.idUser = this.currentUser.id;
    this.userService.addUser(this.user, this.idCountry)
      .subscribe(data => console.log(data), error => console.log(error));
      this.location.back();
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
