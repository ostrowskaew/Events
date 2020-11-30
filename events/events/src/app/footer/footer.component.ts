import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public translate: TranslateService
    ) {
      translate.addLangs(['en', 'pl']);
      translate.setDefaultLang('en');
    }
    switchLang(lang: string) {
      this.translate.use(lang);
    }

  ngOnInit(): void {
  }

}
