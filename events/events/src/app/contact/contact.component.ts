import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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
