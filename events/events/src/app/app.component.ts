import { Component } from '@angular/core';
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
  showModeratorBoard = false;
  username: string;

  constructor(
    public translate: TranslateService, private tokenStorageService: TokenStorageService
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
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  public onToggleSidenav = () => {
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
  title = 'events';

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
