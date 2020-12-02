import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content: string;

  constructor(private userService: UserService,
    public translate: TranslateService
  ) {

  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit() {
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
