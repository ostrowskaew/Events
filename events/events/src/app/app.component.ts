import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  username: string;
  footer: boolean;
  languange: string = 'en';

  constructor(
    public translate: TranslateService, private tokenStorageService: TokenStorageService, private router: Router
  ) {
  }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');

      this.username = user.username;
    }

    this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.footer = (event.url !== '/events-gallery')
      }
    });
  }

  public onToggleSidenav = () => {
  }

  languageChange(lang: string){
    this.languange = lang;
  }
  title = 'events';

}
