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

  constructor(
    public translate: TranslateService, private tokenStorageService: TokenStorageService, private router: Router
  ) {
    translate.addLangs(['en', 'pl']);
    translate.setDefaultLang('en');
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

  switchLang(lang: string) {
    this.translate.use(lang);
  }
  title = 'events';

}
