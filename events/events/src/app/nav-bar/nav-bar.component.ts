import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { TokenStorageService } from '../services/token-storage.service';
import { Output, EventEmitter } from '@angular/core';
import { LanguageService } from '../services/language.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Input() isLoggedIn: boolean;
  @Input() showAdminBoard: boolean;
  @Input() username: string;
  @Output() langChange = new EventEmitter<string>();

  constructor(
    public translate: TranslateService,
    private breakpointObserver: BreakpointObserver,
    private tokenStorageService: TokenStorageService,
    public langService: LanguageService
  ) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
    this.langChange.emit(this.translate.currentLang);
    console.log(this.translate.currentLang)
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
    this.translate.currentLang = lang;
    this.langService.changeLang(lang);
    this.changeLang(this.translate.currentLang);
    console.log(this.translate.currentLang);
  }

  changeLang(value: string) {
    this.langChange.emit(value);
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
