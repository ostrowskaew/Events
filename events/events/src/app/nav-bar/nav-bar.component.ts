import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Input() isLoggedIn: boolean;
  @Input() showAdminBoard: boolean;
  @Input() username: string;

  constructor(
    public translate: TranslateService,
    private breakpointObserver: BreakpointObserver,
    private tokenStorageService: TokenStorageService
  ) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  public onToggleSidenav = () => {
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }


  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
